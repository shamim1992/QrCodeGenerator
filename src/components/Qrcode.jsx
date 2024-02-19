import html2canvas from 'html2canvas';
import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const Qrcode = () => {

    const [value, setValue] = useState("https://mobiflix.in");

    const handleImageDownload =async () => {
        const element = document.getElementById('print'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');
    
        link.href = data;
        link.download = 'downloaded-image.jpg';
    
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <div className='flex justify-center py-20 w-full'>
            <div></div>
            <div className=''>
                <div id='print'  className='shadow-lg border-2 border-blue-600 p-5 rounded-md mt-5'>
                    <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 256 256`}
                />
                </div>
                <div className='py-20'>
                    <input placeholder='Write here' className='outline outline-offset-2 outline-blue-500 rounded-md w-full p-2' type="text" onChange={(e) => setValue(e.target.value)} />
                    <button type="button" className='items-center focus:outline-red text-white bg-green-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-10' onClick={handleImageDownload}>Download</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Qrcode