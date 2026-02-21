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