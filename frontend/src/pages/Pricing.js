import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='text-center mt-5 mb-5'>
            <p className="h1">Pricing</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.</p>

            <div className="container mt-5">
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title h5">Free</h5>
                                <p className="card-text">
                                    <p className='h1 mt-2'>$0</p>
                                    <p>10 users included</p>
                                    <p>2 GB of storage</p>
                                    <p>Email support</p>
                                    <p>Help center access</p>
                                    <Link to='/register' className='btn btn-primary mt-3'>Sign up for free</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ////// */}
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title h5">Pro</h5>
                                <p className="card-text">
                                    <p className='h1'>$10</p>
                                    <p>20 users included</p>
                                    <p>10 GB of storage</p>
                                    <p>Email support</p>
                                    <p>Help center access</p>
                                    <Link to='/register' className='btn btn-primary mt-3'>Get started</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ////// */}
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title h5">Upgrade</h5>
                                <p className="card-text">
                                    <p className='h1'>$20</p>
                                    <p>30 users included</p>
                                    <p>20 GB of storage</p>
                                    <p>Email support</p>
                                    <p>Help center access</p>
                                    <Link to='/register' className='btn btn-primary mt-3'>Get started</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <p className='h1 mt-5'> Compare plans </p>
                <table  class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Free</th>
                            <th>Pro</th>
                            <th>Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Price</td>
                            <td>$0</td>
                            <td>$10</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Private</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Permissions</td>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Sharing</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Unlimited members</td>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>

                        <tr>
                            <td className='fw-bold'>Extra security</td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pricing