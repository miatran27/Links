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