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


// I want to add a "read more" button to expand the text and "read less" button once text is expanded fully to close the text
// I pulled this code from Claude.ai
// Here the "extra.style.display" is my extra 'block' that I put in my span class "quote-more" in HTML, that block will be hidden with a "Read more" button displayed for users to expand the block. Otherise, when that 'block' is fully displayed, there will be a "Read less" button to collapse the block.

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



// I want to add "back to top" button as user scrolls through the channel blocks
// I pulled the code from what we learned in class and also used Claude.ai for this case
// Below, i'm defining what each element is and setting up the variable

let backToTop = document.querySelector('.back-to-top')
let channelSection = document.querySelector('.channel-blocks-section')

window.addEventListener('scroll', () => {
    if (window.scrollY >= channelSection.offsetTop) {
        backToTop.classList.add('visible')
    } 
    //the line above means if the user has scrolled down far enough to reach where the channel blocks section starts, add the 'visible' class, which triggers the CSS to show the button.
    //"backToTop.classList" means calling the class list that belongs within the "back-to-top" button
    
    else {
        backToTop.classList.remove('visible')
    }
    //this means otherwise if the condition is not applied (when user is not scrolling through the channel blocks section) → remove 'visible' class (hide the button)
})



// I want the page to show the user which page they are currently on by adding an underline to each control button when user is on its corresponding page. Before adding the style, I need an 'active' class to the button via JS
// I pulled the code from what we learned in class and also used Claude.ai for this case
// Here, i'm adding and removing 'active' class. When the button page is active (meaning user is on that page), the CSS style will be added 

let buttons = document.querySelectorAll('#controls button') //setting up the variable

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // remove active from all buttons first
        buttons.forEach(btn => btn.classList.remove('active'))
        // add active to the clicked button
        button.classList.add('active')
    })
})

// This is to make sure the "All" button also gets active by default on page load
document.querySelector('#show-all').classList.add('active')

