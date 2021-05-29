import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FeaturedPropertiesDetailShow.css'
import AgentShow from '../AgentShow/AgentShow'
import FeaturedPropertiesDetail from '../FeaturedPropertiesDetail/FeaturedPropertiesDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBed, faBath, faBuilding,faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'


const FeaturedPropertiesDetailShow = () => {
    const { id } = useParams();
    const [properties, setProperties] = useState([]);

    const agents = [
        {
            user: 'Silvia Satoar Plabon',
            mobile: '01743202786',
            email: 'silviaplabon@gmail.com',
            image: 'https://i.ibb.co/0t3KrTJ/orca-share-media1576587583536.jpg'
        },
        {
            user: 'Silvia Satoar Plabon',
            mobile: '01743202786',
            email: 'silviaplabon@gmail.com',
            image: 'https://i.ibb.co/0t3KrTJ/orca-share-media1576587583536.jpg'
        },
        {
            user: 'Silvia Satoar Plabon',
            mobile: '01743202786',
            email: 'silviaplabon@gmail.com',
            image: 'https://i.ibb.co/0t3KrTJ/orca-share-media1576587583536.jpg'
        }
    ]
    const [apartmentData, setApartmentData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4300/apartmentSpecificData/${id}`)
            .then(res => res.json())
            .then(data => {
                setApartmentData(data)
            })
    }, [id])
    const { name, image, price, dining, wash, kitchen, location, size, bed, bathroom } = apartmentData;


    useEffect(() => {
        fetch('http://localhost:4300/apartmentData')
            .then(res => res.json())
            .then(data => {
                setProperties(data)
            })
    }, [])
    let propertiesData = properties?.sort(() => Math.random() - Math.random()).slice(0, 3);
    return (
        <div className="container mt-5">
            <div className="row">
                <div className=" col-8 col-md-9 col-sm-8">
                    <div className="row ">
                        <div className="col-8 col-md-8 col-sm-8 h-100 " style={{ padding: '2px' }} >
                            <img src={image} className="img-fluid mainImage" />
                        </div>
                        <div className="col-4 col-md-4 col-sm-4  h-100" style={{ padding: '2px' }}>
                            <img src={dining} className="img-fluid diningImg" />
                        </div>
                    </div>
                </div>
                <div className=" col-3 col-md-3 col-sm-4">
                    <div className="row">
                        <div className="col-md-12  col-sm-6 w-100" style={{ padding: '2px' }} >
                            <img src={wash} className="img-fluid washImg" />
                        </div>
                        <div className="col-md-12 col-sm-6  w-100 " style={{ padding: '2px' }}  >
                            <img src={kitchen} className="img-fluid kitchenImg" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-7 ">
                    <h4 className="fs-1">{name}</h4>
                    <div className="">
                        <h4 className="">${price}.00</h4>

                        <div className="row">
                            <div className="col-md-5  mt-2 card shadow">
                                <h5 className="py-1 px-0 text-center">{location}</h5>
                                <h6 className="text-center">Lower East Side</h6>
                            </div>
                            <div className=" ms-5 col-md-6  mt-2 card shadow">
                                <div className="row ">
                                    <div className="row ">
                                        <div className="col-md-4 p-1" >
                                            <FontAwesomeIcon className="mt-1  iconFeatureProperties" icon={faBed} /><br />
                                            <h6 className="text-center ">{bed}room</h6>
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <FontAwesomeIcon className=" iconFeatureProperties" icon={faBath} />
                                            <br /><h6 className="text-center">{bathroom} bath</h6>
                                        </div>
                                        <div className="col-md-4 p-1">
                                            <FontAwesomeIcon className=" iconFeatureProperties" icon={faBuilding} /><br />
                                            <h6 className="text-center">{size}sq.pt</h6>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-5">
                        <h5 className="fs-2">Description:</h5>
                        <p>We designed your  {name} with “comfort  enhancing” features. It is our goal to provide the best and highest value apartment living you can find.</p>
                    </div>

                    <div className="ms-5">
                        <li className="liFeatureProperties">Brand new and 100% fresh open floor plans</li>
                        <li className="liFeatureProperties">High end kitchen design featuring maple toffee Leedo</li>
                        <li className="liFeatureProperties">cabinets and black Frigidaire </li>
                        <li className="liFeatureProperties">  Space expanding breakfast bar!</li>
                        <li className="liFeatureProperties">washer and dryer in your apartment</li>
                        <li className="liFeatureProperties">Expanded living space featuring</li>
                        <li className="liFeatureProperties">Bright bathrooms,showers and tubs</li>
                    </div>

                </div>
                <div className="col-md-5 mt-5">
                    <div className="">
                        <button className="order btn orderwishBtn"><FontAwesomeIcon className="me-1" icon={faCartPlus} />Order</button>
                        <button className="order btn orderwishBtn ms-2"> <FontAwesomeIcon className="me-1" icon={faHeart} />Wish</button>
                    </div>
                    <div className="">
                        <h5 className="fs-3 mt-4">CONTACT US</h5>
                        <input type="text mt-1 " className="form-control" placeholder="EMAIL"/>
                        <button type="submit " style={{margin:'3px'}}>CONTACT</button>
                    </div>


                    <h4 className="mt-4">AGENTS</h4>
                    <div className="agent">
                        {
                            agents.map(agent =>
                                <AgentShow agent={agent}></AgentShow>
                            )
                        }
                    </div>
                </div>

            </div>

            <div className="row mt-5">
                <h4 className="fs-2">SIMILAR APARTMENT</h4>
                <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        propertiesData?.map(property => property.name != apartmentData.name && <FeaturedPropertiesDetail property={property}></FeaturedPropertiesDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedPropertiesDetailShow;