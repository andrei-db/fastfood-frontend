import {User, Mail, CalendarClock, MapPin, Phone} from 'lucide-react'
function Contact() {
    return (
        <>
            <div className="text-black">
                <div className=" bg-[url(bg.png)] h-[250px] bg-no-repeat bg-[length:100%_300px]
                 flex items-center justify-center">
                    <h1 className="italic font-bold text-white text-6xl">Contact</h1>
                </div>
                <div className="my-20 grid grid-cols-1 md:grid-cols-2">
                    <div className="flex justify-center items-center">
                        
                        <form>
                            <h2 className='text-3xl'>Get in touch!!</h2>
                            <div className="mt-3 flex mb-4">
                                <div className="flex items-center bg-gray-100 p-3 rounded-md">
                                    <User className='w-4 h-4'/>
                                    <input className="ms-3" type="text" placeholder="Your name"/>
                                </div>
                                <div className="ms-3 flex items-center bg-gray-100 p-3 rounded-md">
                                    <Mail className="w-4 h-4"/>
                                    <input className="ms-3" type="text" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="mb-4 bg-gray-100 w-full p-3 rounded-md">
                                <select className="w-full">
                                    <option>Choose ...</option>
                                </select>
                            </div>
                            <div className="mb-4 bg-gray-100 rounded-md p-3">
                                <textarea className="resize-none w-full h-[200px] " placeholder="Write message ...">

                                </textarea>
                            </div>
                            <button className="bg-black text-white px-6 py-3 rounded-md" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className=' w-[550px] bg-gray-100 p-10 rounded-2xl'>
                        <h2 className='text-center text-3xl'>Contact Information</h2>
                        <div className='flex items-center mt-5 bg-white p-5 rounded-2xl'>
                            <div className='bg-green-500 p-3 rounded-full'>
                                <MapPin className='w-8 h-8 text-white'/>
                            </div>
                            <div className='ms-5'>
                                <h3 className='font-semibold text-xl'>Address</h3>
                                <p className='text-gray-500'>Street Lionel Messi 30, Sibiu, Romania</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5 bg-white p-5 rounded-2xl'>
                            <div className='bg-red-400 p-3 rounded-full'>
                                <Phone className='w-8 h-8 text-white'/>
                            </div>
                           <div className='ms-5'>
                                <h3 className='font-semibold text-xl'>Contact</h3>
                                <p className='text-gray-500'>Mobile: +0792423543543</p>
                                <p className='text-gray-500'>Email: contact@burgerinho.com</p>
                           </div>
                        </div>
                        <div className='flex items-center mt-5 bg-white p-5 rounded-2xl'>
                             <div className='bg-fuchsia-400 p-3 rounded-full'>
                                <CalendarClock className='w-8 h-8 text-white '/>
                            </div>
                            <div className='ms-5'>
                                <h3 className='font-semibold text-xl'>Opening Hours</h3>
                                <p className='text-gray-500'>Monday - Sunday: 9:00 AM - 18:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;