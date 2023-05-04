import React from 'react';
import blog1 from '../../../../public/control.png'
import blog2 from '../../../../public/props.png'
import blog3 from '../../../../public/nodeexpress.png'
import blog4 from '../../../../public/hook.png'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {
    // <div className="divider divider-horizontal">OR</div>
    const options = {
        margin: 40,
        pagebreak: { mode: 'avoid-all' },
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
    return (
        <div className="App">
            <Pdf  targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button className='btn btn-primary ms-36 mt-10' onClick={() => toPdf(options)} >Generate Pdf</button>}
            </Pdf>
            <div className='md:w-2/4 mx-auto p-8' ref={ref}>
                <div className='pb-8'>
                    <img src={blog1} alt="" />
                    <h3 className='font-bold text-3xl'>Differences between uncontrolled and controlled components.</h3>
                    <div className="divider divider-vertical"></div>
                    <h2 className='font-bold text-xl my-2'>Controlled Components:</h2>
                    <p>A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers like <span className='text-blue-500'>setState()</span>. Also, the component controls the render and keeps the data of form in the component state.</p>
                    <h2 className='font-bold text-xl my-2'>UnControlled Components:</h2>
                    <p>We already know what is controlled components, it must be clear that the uncontrolled component react does not use state. Thus uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.</p>
                </div>
                <div className='pb-8'>
                    <img src={blog2} alt="" />
                    <h3 className='pt-4 font-bold text-3xl'>How to validate React props using PropTypes
                    </h3>
                    <div className="divider divider-vertical"></div>
                    <p>React is a popular JavaScript library used for building user interfaces. When working with React components, it's important to ensure that the props being passed to the component are of the correct type and shape. This is where PropTypes comes in. PropTypes is a package that is used to validate the props being passed to a React component. In this blog post, we'll take a closer look at how to validate React props using PropTypes.</p>
                    <p className='font-semibold'>
                        To validate React props using PropTypes:
                        <br /><br />
                        1. Install the prop-types package with npm install prop-types.<br />
                        2. Import PropTypes into your component with import PropTypes from 'prop-types'.<br />
                        3. Define propTypes by adding a static propTypes object to your component, specifying the expected types and shapes of the props.<br />
                        4. Test the propTypes by passing different props and checking if warnings are thrown using a testing library like Jest.<br />
                    </p>

                </div>
                <div className='pb-8'>
                    <img src={blog3} alt="" />
                    <h3 className='font-bold text-3xl'>Difference between nodejs and express js.
                    </h3>
                    <div className="divider divider-vertical"></div>
                    <ol className='list-decimal leading-loose'>
                        <li>Node.js is a runtime environment for executing JavaScript code, while Express.js is a web application framework built on top of Node.js.</li>
                        <li>
                            Node.js provides low-level APIs for working with file systems, network connections, and other system resources, while Express.js provides a higher-level API for building web applications.
                        </li>
                        <li>Express.js provides middleware functions that can be used to handle common web application tasks, while Node.js does not provide any built-in middleware functions.</li>
                        <li>Node.js can be used to build a wide variety of applications, while Express.js is specifically designed for building web applications and APIs.</li>

                    </ol>

                </div>
                <div className='pb-8'>
                    <img src={blog4} alt="" />
                    <h3 className='font-bold text-3xl pt-4'>What is a custom hook, and why will you create a custom hook?
                    </h3>
                    <div className="divider divider-vertical"></div>
                    <p>A custok hook in a React is a reusable funtion that decrease complex logic. It can be across multiple components.
                        <br />Here some Features:
                    </p>
                    <ol className='list-decimal leading-loose'>
                        <li>Reusability: By encapsulating complex logic in a custom hook, you can reuse that logic across multiple components without having to repeat code.</li>
                        <li>
                            Testing: Custom hooks can be tested independently of components, making it easier to write tests and ensuring that the logic is working correctly.
                        </li>
                    </ol>

                </div>
            </div>
        </div>
    )
};

export default Blog;