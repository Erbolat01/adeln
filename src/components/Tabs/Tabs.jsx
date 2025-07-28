import { useEffect, useRef } from 'react'
import { tabUtils } from './tabUtils'
import { useBreakPoint } from 'components/hooks'
import './styles.css'

const Tabs = ({items}) => {
    const tabContainerRef = useRef(null)
    const screen = useBreakPoint()

    useEffect(() => {
        if (tabContainerRef.current) {
            tabUtils.init(tabContainerRef.current)
        }
    }, [])

    return (
        <div id='tabs' className='channel-info'>
            <div ref={tabContainerRef} role='tablist' aria-labelledby='channel-name'>
                {items.map((item, index) => (
                    <button
                        key={item.key}
                        id={`tab-${item.key}`}
                        role='tab'
                        aria-controls={`tabPanel-${item.key}`}
                        aria-selected={index === 0}
                        tabIndex={index === 0 ? 0 : -1}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className='tab-panels'>
                {items.map((item, index) => (
                    <div
                        key={`panel-${item.key}`}
                        id={`tabPanel-${item.key}`}
                        role='tabpanel'
                        tabIndex='0'
                        aria-labelledby={`tab-${item.key}`}
                        hidden={index !== 0}
                    >
                        {item.children}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tabs
