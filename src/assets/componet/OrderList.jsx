import React from 'react'

const OrderList = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Model   </th>
                            <th>Name</th>
                            <th> Prodect</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://olcha.uz/image/700x700/products/2022-05-18/noutbuk-apple-macbook-pro-14-m1-pro-16512gb-ssd-14-serebristyy-52853-0.jpeg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">MacBook Pro 14</div>
                                        <div className="text-sm opacity-50">Lorem ipsum dolor sit.</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Durgan, Kerluke and Prosacco
                                <br />
                                <span className="badge badge-ghost badge-sm">macbook</span>
                            </td>
                            <td>Noutbuk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://olcha.uz/image/700x700/products/2022-08-28/noutbuk-asus-zenbook-pro-duo-15-oled-ux582zm-oled109w-i9-321tb-156-s200759957-106071-2.jpeg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Asus ZenBook Pro Duo 15</div>
                                        <div className="text-sm opacity-50">Lorem, ipsum dolor.</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Kiehn, Wiza and Collins
                                <br />
                                <span className="badge badge-ghost badge-sm">Asus </span>
                            </td>
                            <td>Noutbuk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://i5.walmartimages.com/asr/d4f3dd76-69b4-4b9f-b946-1881ea3340fe_2.8857a0b66e26a3c87d44fdb535252915.jpeg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">HP</div>
                                        <div className="text-sm opacity-50">Lorem, ipsum dolor.</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Hauck, Christiansen and Kulas
                                <br />
                                <span className="badge badge-ghost badge-sm">HP</span>
                            </td>
                            <td>Noutbuk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://castore.uz/upload/iblock/398/58z1ehkix9252vyktmqmjsoe0a8xyxfq/noutbuk-lenovo-ideapad-3-14iml05-81wa00b1us-4.png"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Lenovo</div>
                                        <div className="text-sm opacity-50">Lorem, ipsum dolor.</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Kulas, O'Kon and Wiza
                                <br />
                                <span className="badge badge-ghost badge-sm">Lenovo</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                            </td>
                            <td>Noutbuk</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                   
                </table>
            </div>
        </div>
    )
}

export default OrderList