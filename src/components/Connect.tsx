import React from 'react'
import Web3Modal from "web3modal";
import { utils, providers } from "ethers";
import { Helmet } from "react-helmet"
import Profile from './Profile';

interface Web3Context {
    web3Modal: any
    chainId: number
    address: string
}

declare var window: any

export default function Connect() {
    const [web3Context, setWeb3Context] = React.useState<Web3Context | undefined>();
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')

    async function initWeb3Modal() { 
        if (typeof window !== "undefined" && typeof window.WalletConnectProvider !== "undefined") {
            const providerOptions = {
                walletconnect: {
                    package: window.WalletConnectProvider.default,
                    options: {
                        infuraId: process.env.INFURA_ID,
                    }
                },
            }

            return new Web3Modal({
                network: "mainnet",
                cacheProvider: false,
                providerOptions
            });
        } else {
            setError("Can't init Web3modal - window or WalletConnectProvider undefined")
        }
    }

    const connectWeb3 = async () => {
        const web3Modal = await initWeb3Modal();
        if(web3Modal) web3Modal.clearCachedProvider()
        
        let web3, provider, network, signer, address, rawMessage, signedMessage = {}
        try {
            web3 = await web3Modal.connect();    
            provider = new providers.Web3Provider(web3);

            network = await provider.getNetwork();
            signer = provider.getSigner()
            address = await signer.getAddress();
        }
        catch (e) {
            const msg = "Could not connect to web3 wallet."
            console.log(msg, e);
            setError(msg)
            return
        }

        try {
            const response = await fetch('/.netlify/functions/api/users/nonce')
            const body = await response.json()
            rawMessage = body.data

            if (web3.wc) {
                signedMessage = await provider.send(
                    'personal_sign',
                    [ utils.hexlify(utils.toUtf8Bytes(rawMessage)), address.toLowerCase() ]
                );
            }
            else { 
                signedMessage = await signer.signMessage(rawMessage)
            }
        }
        catch (e) {
            const msg = "Did not received signed message."
            console.log(msg, e);
            setError(msg)
            return
        }

        try {
            const response = await fetch('/.netlify/functions/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    address: address.toLowerCase(),
                    msg: rawMessage,
                    signed: signedMessage 
                })
            })

            if (response.status === 200) {
                // const data = await response.json()

                setWeb3Context({
                    web3Modal,
                    chainId: network.chainId,
                    address
                })
            } else {
                const data = await response.json()
                setError(data.message)
            }
        }
        catch (e) {
            const msg = "Could not login with web3 account"
            console.log(msg, e);
        }
    }

    const disconnect = async () => {
        if (!web3Context.web3Modal) {
            console.log('web3Modal not initialized.')
            return
        }

        web3Context.web3Modal.clearCachedProvider()
        await fetch('/.netlify/functions/api/users/lgout', { method: 'POST' })        
        setWeb3Context(undefined)
    }

    return (
        <div>
            {/* Can use either react-helmet or include the script from gatsby-browser */}
            <Helmet>
                <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.4.1/dist/umd/index.min.js" />
            </Helmet>
            
            {error && <div>STATUS: {error}</div>}
            {!web3Context && <button onClick={connectWeb3}>Connect</button>}
            {web3Context && <button onClick={disconnect}>Logout</button>}
            {web3Context && <Profile />}
        </div>
    )
}