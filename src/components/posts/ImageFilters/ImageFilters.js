import React from 'react';
import './ImageFilters.css';

function ImageFilters() {
    return (
        <div className='posts'>
            <div className='container'>
                <h1 className='text-header'>
                    Image Processing Filters
                </h1>
                <p className='text-paragraph'>
                    This project demonstrates my knowledge of Python programming and image processing principles.
                    Libraries that were frequently used include NumPy, OpenCV, and Matplotlib.
                </p>
                <p className='text-paragraph'>
                    This is the project I am most proud of as it is most visually appeasing, but also one of the more difficult project as
                    I had to learn both Python programming and image processing concepts at once. The image filters are Python scripts that
                    take an input image and occasional parameters, to transform the image similar to apps such as Snapchat and Instagram.
                    The project includes over 50 image filters including enhancement, restoration, hue/saturation alteration and greyscale filters.
                    I will show my favourite two down below: oilify and cartoonify filters.
                </p>
                <p className='text-paragraph'>
                    The oilify filter takes an input image and outputs an oil painting version of itself.
                </p>
                <div className='images'>
                    <img
                        alt='Oilify Image Before'
                        src={'https://raw.githubusercontent.com/aa-fahim/Image-Processing/master/Oilify%20Filter/dog.jpg'}
                    />
                    <img
                        alt='Oilify Image After'
                        src={'https://raw.githubusercontent.com/aa-fahim/Image-Processing/master/Oilify%20Filter/oil_paint_version.jpg'}
                    />
                </div>
                <p className='text-paragraph'>
                    The code for the oilify filter can be seen&nbsp;
                    <a href='https://github.com/aa-fahim/Image-Processing/tree/master/Cartoon%20Effect%20Filter'>here</a>.
                </p>
                <p className='text-paragraph'>
                    The cartoonify filter takes an input image and outputs a cartoon drawing version of itself.
                </p>
                <div className='images'>
                    <img
                        alt='Cartoonify Image Before'
                        src={'https://raw.githubusercontent.com/aa-fahim/Image-Processing/master/Cartoon%20Effect%20Filter/original.png'}
                    />
                    <img
                        alt='Cartoonify Image After'
                        src={'https://raw.githubusercontent.com/aa-fahim/Image-Processing/master/Cartoon%20Effect%20Filter/cartoon_version.png'}
                    />
                </div>
                <p className='text-paragraph'>
                    The code for the cartoonify filter can be seen&nbsp;
                    <a href='https://github.com/aa-fahim/Image-Processing/tree/master/Oilify%20Filter'>here</a>.
                </p>
            </div>
        </div>
    )
}

export default ImageFilters