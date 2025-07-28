export const tabUtils = {
  init: (tabContainer) => {
    console.log('init', tabContainer)
    const tabButtons = tabContainer.querySelectorAll('[role="tab"]')
    const tabPanels = tabContainer.querySelectorAll('[role="tabpanel"]')

    tabContainer.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('button')
      const currentTab = tabContainer.querySelector('[aria-selected="true"]')

      if (!clickedTab || clickedTab === currentTab) return

      tabUtils.switchTab(clickedTab, tabContainer)
    })

    tabContainer.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          tabUtils.moveLeft(tabContainer)
          break
        case 'ArrowRight':
          tabUtils.moveRight(tabContainer)
          break
        case 'Home':
          e.preventDefault()
          tabUtils.switchTab(tabButtons[0], tabContainer)
          break
        case 'End':
          e.preventDefault()
          tabUtils.switchTab(tabButtons[tabButtons.length - 1], tabContainer)
          break
        default:
          break
      }
    })
  },

  moveLeft: (tabContainer) => {
    const tabButtons = tabContainer.querySelectorAll('[role="tab"]')
    const currentTab = document.activeElement

    if (!currentTab.previousElementSibling) {
      tabButtons[tabButtons.length - 1].focus()
    } else {
      currentTab.previousElementSibling.focus()
    }
  },

  moveRight: (tabContainer) => {
    const tabButtons = tabContainer.querySelectorAll('[role="tab"]')
    const currentTab = document.activeElement
    if (!currentTab.nextElementSibling) {
      tabButtons[0].focus()
    } else {
      currentTab.nextElementSibling.focus()
    }
  },

  switchTab: (newTab, tabContainer) => {
    const tabButtons = tabContainer.querySelectorAll('[role="tab"]');
    const tabPanels = tabContainer.nextElementSibling.querySelectorAll('[role="tabpanel"]');
    const oldTab = tabContainer.querySelector('[aria-selected="true"]');
    const activePanelId = newTab.getAttribute('aria-controls');
    const activePanel = document.getElementById(activePanelId);

    // Update tab states
    tabButtons.forEach((button) => {
      button.setAttribute('aria-selected', 'false');
      button.setAttribute('tabindex', '-1');
    });

    // Update panel states
    tabPanels.forEach((panel) => {
      panel.setAttribute('hidden', true);
    });

    // Activate new tab and panel
    newTab.setAttribute('aria-selected', 'true');
    newTab.setAttribute('tabindex', '0');
    activePanel.removeAttribute('hidden');
    newTab.focus();
    
    // Move indicator with smooth transition
    tabUtils.moveIndicator(oldTab, newTab, tabContainer);
  },

  moveIndicator: (oldTab, newTab, tabContainer) => {
    const newTabPosition = oldTab.compareDocumentPosition(newTab)
    const newTabWidth = newTab.offsetWidth / tabContainer.offsetWidth
    let transitionWidth

    // if the new tab is to the right
    if (newTabPosition === 4) {
      transitionWidth =
        newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft
    } else {
      // if the tab is to the left
      transitionWidth =
        oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft
      tabContainer.style.setProperty("--_left", newTab.offsetLeft + "px")
    }

    tabContainer.style.setProperty(
      "--_width",
      transitionWidth / tabContainer.offsetWidth
    )

    setTimeout(() => {
      tabContainer.style.setProperty("--_left", newTab.offsetLeft + "px")
      tabContainer.style.setProperty("--_width", newTabWidth)
    }, 220)
  }
}
