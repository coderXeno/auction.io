import React from "react";
import { Link } from "react-router-dom";

export default function Products(){
    return(
        <div>
            <div className="table__container">
                <Link to='/products/add' className="products__cta">
                    ADD PRODUCTS
                </Link>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Last Bidder</th>
                            <th>Creator</th>
                        </tr>
                    </thead>
                    {/* Data for display, we will later get it from the server */}
                    <tbody>
                        <tr>
                            <td>Tesla Model S</td>
                            <td>$30,000</td>
                            <td>@david_show</td>
                            <td>@elon_musk</td>
                        </tr>

                        <tr>
                            <td>Ferrari 2021</td>
                            <td>$50,000</td>
                            <td>@bryan_scofield</td>
                            <td>@david_asaolu</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};