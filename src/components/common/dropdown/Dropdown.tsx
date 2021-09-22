import React, { createRef, useEffect, useState } from 'react'
import css from './dropdown.module.scss'
// import IconArrowDropdown from 'src/assets/icons/arrow_drop_down.svg'
import ChevronDown from 'src/assets/icons/arrow_desc.svg'
import ChevronUp from 'src/assets/icons/arrow_asc.svg'
import { trigger } from 'swr'

export interface DropdownProps {
  value: any
  className?: string
  customIcon?: React.ElementType<SVGAElement>
  renderCustomTrigger?: (foldout: any, defaultTriggerProps: any) => React.ReactElement
  onChange: (value: any) => void
  options: {
    [key: string]: any
  }[]
}

export function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = createRef<HTMLDivElement>()
  const foldoutRef = createRef<HTMLUListElement>()
  const currentSelection = props.options.find(option => option.value === props.value)

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, open])

  let className = `${css['container']}`
  if (props.className) className += ` ${props.className}`
  let foldoutClassName = css['dropdown']
  if (open) foldoutClassName += ` ${css['open']}`

  const Icon = (() => {
    // Used by e.g. Filter
    if (props.customIcon) return props.customIcon

    if (open) {
      return ChevronUp
    } else {
      return ChevronDown
    }
  })()

  const triggerProps = {
    role: 'button',
    onClick: () => setOpen(!open),
    'aria-label': 'Toggle dropdown',
    className,
    ref,
  }

  const foldoutContent = (
    <ul className={foldoutClassName} ref={foldoutRef} onClick={e => e.stopPropagation()}>
      {props.options.map(({ text, value, onClick }) => {
        const selected = value === props.value

        return (
          <li
            key={value}
            onClick={() => {
              const closeDropdown = () => setOpen(false)

              if (onClick) {
                onClick(closeDropdown)
              } else {
                props.onChange(value)

                closeDropdown()
              }
            }}
          >
            <span className={selected ? css['active-filter'] : undefined}>{text}</span>
          </li>
        )
      })}
    </ul>
  )

  if (props.renderCustomTrigger) {
    return props.renderCustomTrigger(triggerProps, foldoutContent)
  }

  return (
    <div {...triggerProps}>
      {currentSelection && currentSelection.text}
      <Icon />

      {foldoutContent}
    </div>
  )
}
