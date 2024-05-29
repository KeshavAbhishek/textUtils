import React from 'react'

function About() {
    // document.getElementById('lightDarkMode').style.display='none';
    return (
        <div className='container' id='about'>
            <h1>About</h1>
            <video autoPlay loop>
                <source src='https://cdn.pixabay.com/video/2022/04/02/112722-695433093_large.mp4' type='video/mp4' />
            </video>
            <p>
                Text Utils is a versatile utility software developed to modify and analyze text in various ways, tailored to your preferences. It features case conversion tools, allowing you to easily transform text to uppercase or lowercase with a single click. Additionally, it offers character and word count functionalities, enabling you to quickly determine the number of characters and words in any given text. To enhance user experience, Text Utils includes a theme selection option, letting you personalize the interface by toggling between Dark Mode and Light Mode for a comfortable visual experience. Robust error handling mechanisms are also integrated to ensure a smooth and user-friendly experience, minimizing interruptions and issues. Whether you're preparing documents, coding, or simply editing text, Text Utils provides a comprehensive set of tools to boost your productivity and efficiency.
            </p>
        </div>
    )
}

export default About
