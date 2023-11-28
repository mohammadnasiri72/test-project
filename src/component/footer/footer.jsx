
import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer flex flex-wrap justify-center items-center h-screen bg-no-repeat bg-cover bg-blend-multiply mt-10">
                <div className="md:w-5/12 w-full border-white md:border-r">
                    <p className="text-xl font-semibold text-white mx-auto w-1/2">Feel free to reach out for any inquiries. </p>
                    <p className="mt-4 text-white w-1/2 text-sm mx-auto">At Apex Pioneer Group, we're always ready to assist
                        you. You can call or text us at (469) 207-1824.
                        We're open to exploring various opportunities and
                        promise a prompt response, often providing answers
                        on the same day.
                    </p>
                    <p className="mt-4 text-white w-1/2 text-sm mx-auto">Looking forward to the possibility of closing a deal
                        together soon!</p>
                </div>
                <div className="md:w-4/12 w-full px-5 ">
                    <form className="flex flex-col md:w-full w-1/2 mx-auto border-white border-t md:border-t-0 pt-3" action="post">
                        <input className="bg-transparent outline-none border rounded-md p-1 text-white sm:w-64 w-32" type="text" placeholder="Name" />
                        <input className="bg-transparent outline-none border rounded-md p-1 text-white sm:w-64 w-32 mt-2" type="text" placeholder="Company Name" />
                        <textarea className="md:w-full sm:w-96 sm:h-32 h-20 bg-transparent border-white border mt-2 rounded-md p-1 outline-none text-white" placeholder="Inquiry"></textarea>
                        <div className="text-end md:w-full sm:w-96"><button className="bg-slate-400 py-1 px-10 border-white border rounded-md mt-2 hover:bg-slate-600 duration-300" type="submit">submit</button></div>
                    </form>
                </div>
                <div className="w-full text-center text-white px-5">© 2023 Apex Pioneer Group. All rights reserved.</div>
            </div>
        </>
    )
}

export default Footer