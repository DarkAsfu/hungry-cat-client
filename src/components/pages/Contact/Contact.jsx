
import contact from '../../../../public/side-girl-final-contact-600x679-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className='mb-20'>
            <div className='bg-blue-500 '>
                <div className='w-10/12 mx-auto md:flex justify-between items-center py-12'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <FontAwesomeIcon className='text-white w-14 h-14 border p-2 rounded-full' icon={faLocationArrow} />
                        </div>
                        <div>
                            <h2 className='text-white text-xl font-semibold'>SIGN UP FOR OUR AFFILIATE PROGRAM! NOW…</h2>
                            <p className='text-sm text-white font-semibold mt-2'>SIGN UP NOW...</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn bg-white border-0 text-blue-500 px-8 my-8'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div class="bg-white w-10/12 text-gray-100 mx-auto">
                <div
                    class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                    <div class="flex flex-col justify-between">

                        <div class="mt-8 text-center">
                            <img src={contact} alt="" />
                        </div>
                    </div>
                    <div class="">
                        <div>
                            <h2 className='py-10 text-4xl font-semibold'><span className='bg-blue-600 rounded-full px-3.5 py-1 text-white'>L</span>et's Get In Touch</h2>
                        </div>
                        <div>
                            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" />
                        </div>
                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="mt-8">
                            <button
                                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;