let showAllButton = document.querySelector('#show-all')
let showImagesButton = document.querySelector('#show-images')
let showVideosButton = document.querySelector('#show-videos')
let showTextButton = document.querySelector('#show-text')
let showLinksButton = document.querySelector('#show-links')

let channelBlocks = document.querySelector('#channel-blocks')

// Adding functions in to make the buttons work. For example, when I click on the "Images" button, everything else is removed except the images.

showAllButton.addEventListener('click', () => {
    channelBlocks.classList.remove('show-images')
    channelBlocks.classList.remove('show-videos')
    channelBlocks.classList.remove('show-text')
    channelBlocks.classList.remove('show-links')
})

showImagesButton.addEventListener('click', () => {
    channelBlocks.classList.add('show-images')
    channelBlocks.classList.remove('show-videos')
    channelBlocks.classList.remove('show-text')
    channelBlocks.classList.remove('show-links')
})
showVideosButton.addEventListener('click', () => {
    channelBlocks.classList.remove('show-images')
    channelBlocks.classList.add('show-videos')
    channelBlocks.classList.remove('show-text')
    channelBlocks.classList.remove('show-links')
})
showTextButton.addEventListener('click', () => {
    channelBlocks.classList.remove('show-images')
    channelBlocks.classList.remove('show-videos')
    channelBlocks.classList.add('show-text')
    channelBlocks.classList.remove('show-links')
})
showLinksButton.addEventListener('click', () => {
    channelBlocks.classList.remove('show-images')
    channelBlocks.classList.remove('show-videos')
    channelBlocks.classList.remove('show-text')
    channelBlocks.classList.add('show-links')
})

function toggleQuote(btn) {
    let extra = btn.previousElementSibling
    if (extra.style.display === 'block') {
        extra.style.display = 'none'
        btn.textContent = 'Read more'
    } 
    //'block' is hidden add there is a "Read more" button for users to click to expand and display the 'block'
    else {
        extra.style.display = 'block'
        btn.textContent = 'Read less'
    }
    //when 'block' is fully displayed, there's a "Read less" button to collapse the 'block'
}

// I want to add a "read more" button to expand the text and "read less" button once text is expanded fully to close the text
// I pulled this code from Claude.ai
// Here the "extra.style.display" is my extra 'block' that I put in my span class "quote-more" in HTML, that block will be hidden with a "Read more" button displayed for users to expand the block. Otherise, when that 'block' is fully displayed, there will be a "Read less" button to collapse the block.


// I want to add "back to top" button as user scrolls through the channel blocks
// I got this idea from a friend and Claude.ai 
// Here I'm defining what each element is and giving it a function to each action

let backToTop = document.querySelector('.back-to-top')
let channelSection = document.querySelector('.channel-blocks-section')

window.addEventListener('scroll', () => {
    if (window.scrollY >= channelSection.offsetTop) {
        backToTop.classList.add('visible')
    } 

    //the line above means if the user has scrolled down far enough to reach where the channel blocks section starts, add the 'visible' class, which triggers the CSS to show the button.
    //"backToTop.classList" means calling the class list that belongs to the "back-to-top" button
    
    else {
        backToTop.classList.remove('visible')
    }

    //this means otherwise if the condition is not applied (when user is not scrolling through the channel blocks section, so when user scrolls back up and it reaches the area above the channel blocks section) → remove 'visible' (hide the button)
})