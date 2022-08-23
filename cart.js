import React, { Fragment, useEffect, useState } from "react";
import { StyledLink } from "./style";
import './cart.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart() {

    const [Category, setCategory] = useState([]);
    const [Product, setProduct] = useState([]);
    const [Product1, setProduct1] = useState([]);
    const [Cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [search,setSearch] =useState('');
    const [record,setRecord] = useState([]);
    const [showModal, setShowModal]     = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleToggleModal = () => {
        setShowModal(!showModal);
      }

     
    
    const getCategory = async () => {
        setLoading(true);
        const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/categories");
        const result = await response.json();
        setCategory(result.data);
        setLoading(false);
      };
    
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/categories/1/Product");
        const result1 = await response.json();
        setProduct(result1.data);
        setLoading(false);
      };
      const getProduct2 = async () => {
        setLoading(true);
        const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/categories/2/Product");
        const result3 = await response.json();
        setProduct1(result3.data);
        setLoading(false);
      };

      const getCart = async () => {
        setLoading(true);
        const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/Cart");
        const result2 = await response.json();
        setCart(result2.data);
        setLoading(false);
      };
     
     

      async function addToCart(ProductId, Amount, ProductName,quantity) {
        try {
          const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/cart", {
            method: "POST",
            body: JSON.stringify({
                ProductId: ProductId,
                Amount : Amount,
                ProductName : ProductName,
                quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data1 = await response.json();
          console.log(data1);
          getCart();
        } catch (err) {
          alert("Something Went Wrong");
          console.log(err);
        }
      }

      async function increaseQty(id,quantity) {
        try {
          const res = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/quantityPlus", {
            method: "PUT",
            body: JSON.stringify({
                ProductId: id,
                quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data2 = await res.json();
          console.log(data2);
          getCart();
        } catch (err) {
          console.log(err);
        }
      }

      async function decreaseQty(id,quantity) {
        try {
          const res = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/quantityMinus", {
            method: "PUT",
            body: JSON.stringify({
                ProductId: id,
                quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data3 = await res.json();
          console.log(data3);
          getCart();
        } catch (err) {
          console.log(err);
        }
      }

      async function zeroQty(id,quantity) {
        try {
            const res = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/quantityzero", {
            method: "DELETE",
            body: JSON.stringify({
                ProductId: id,
                quantity: quantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          getCart();
          let data4 = await res.json();
          console.log(data4);
          getCart();
        } catch (err) {
          console.log(err);
        }
      }


      const searchRecords = async() => {
      setLoading(true);
      const response = await fetch(`http://lapinozpizza-2452-ruturajsinh-api.radixind.in/productbyname/${search}`);
      const result6 = await response.json();
      setRecord(result6.data);
      setLoading(false);
    };
   

    const loadRecordAgain = async () => {
      setLoading(true);
      const response = await fetch("http://lapinozpizza-2452-ruturajsinh-api.radixind.in/products");
      const result5 = await response.json();
      setRecord(result5.data);
      setLoading(false);
    };

      useEffect(() => {
      loadRecordAgain();
      }, []);
      useEffect(() => {
        getCategory();
      }, []);

      useEffect(() => {
        getProduct();
      }, []);
      useEffect(() => {
        getProduct2();
      }, []);

      useEffect(() => {
        getCart();
      }, []);

        
      
    return (
        <>
         <header>
            <nav className="navbar navbar-expand-md fixed-top bg-white shadow ">
                <div className="container ps-5">
                    <a href="index.html" className="navbar-brand ps-5">
                        <img src="https://iili.io/SGnel2.png" alt="logo" width="150" height="50"></img>
                    </a>
                    <button className="navbar-toggler"  data-toggler="collapase" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end ps-2" id="NavbarNav">
                        <ul className="navbar-nav ml-auto ps-2">
                        <StyledLink to='/home'><li className="nav-item active"><small>Home</small></li></StyledLink>
                            <li className="nav-item active"><small>Our Story</small></li>
                            <li className="nav-item active"><small>Store Locator</small></li>
                            <li className="nav-item active"><small>Contact Us</small></li>
                            <li className="nav-item active"><small>Franchise Enquiry</small></li>
                            <StyledLink to='/home/order-online'><li className="nav-item active"><small>Order Online</small></li></StyledLink>
                        </ul>
                    </div>
                    <button className="nav-link login-btn p-2 me-5" href="#" style={{ 
                            color: '#fff' ,
                            display: 'block',
                            background: '#00572d',
                            lineheight: '24.5px'}} onClick={handleShow1}>
                        <small>Login</small> 
                        <i className="las la-user-check ps-1 la-lg"></i>
                    </button>
                </div>
            </nav>
        </header>
        <Modal show={show1} onHide={handleClose1} className="rounded-1 pt-4">
      <Modal.Header closeButton>
      <img src="https://iili.io/SGnel2.png" alt="logo" width="150" height="50" className="mx-auto d-block"></img>
      </Modal.Header>
      <Modal.Title><p className="text-center pt-3">LOGIN TO CONTINUE</p>
      <p className="text-center text-muted">______________</p></Modal.Title>
      <Modal.Body>
          <label>Mobile Number</label>
          <input type="text" id="inputPhone" className="form-control" aria-describedby="phoneHelpBlock" placeholder="10 Digit Mobile No" required ></input>
          <small id="phoneHelpBlock" className="form-text text-muted">
          Your Mobile Number must be 10 digits long
          </small>
      </Modal.Body>
      <Modal show={showModal}  className="modal">
      <Modal.Body>
          <input type="text" id="inputOTP" className="form-control" aria-describedby="otpHelpBlock" placeholder="Type OTP Here"></input>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="success" onClick={handleClose1}>
          VERIFY
        </Button>
      </Modal.Footer>
      </Modal>
      <Modal.Footer>
        <Button variant="success" onClick={handleToggleModal}>
          VALIDATE
        </Button>
      </Modal.Footer>
      </Modal>


        <section className="wla-main-section">
            <div className="row2 m-0">				
                <div className="col-lg-2 first-dv">
                <div className="navigationtwo">
                        <p className="categories-hd">Categories</p>
                        <nav className="menu menu-top" id="sectionList">
                        {loading ? (
                            <Fragment>loading..</Fragment>
                            ) : (
                            Category.map((i) => (
                            <Fragment>
                                
                                <a className="subcategories" id="featuredProducts-li" href="#featuredProducts"><span>{i.Categoryname}</span> <span className="count-n">(6)</span></a>

                            </Fragment>
                            ))
                        )}
                        </nav>
                    </div>
                </div>
                <div className="col-lg-7 cart-center">            
                    <div className="outlet-top">
                        <div className="row m-0">
                          <div className="input-group mb-4 mt-3 ps-5" onClick={handleShow2}>
                            
                              <div className="form-outline">
                                <input type="text" id="form2" placeholder="Search Product Here" className="form-control pt-2" style={{backgroundColor:"#ececec"}}/>
                              </div>
                              <button type="button" className="btn btn-success">
                                <i className="fa fa-search" aria-hidden="true"></i>
                              </button>
                              
                          </div>  
                          <Modal show={show2} onHide={handleClose2} className="rounded-1 pt-4">
                                      <Modal.Header closeButton>
                                      
                                      </Modal.Header>
                                      <Modal.Title>
                                      <div className="input-group mb-4 mt-3 ps-4">
                                        <div className="form-outline">
                                        <input type="text" id="form1"    onKeyDown={loadRecordAgain} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)} className="form-control" placeholder="Search product Here" style={{backgroundColor:"#ececec"}}/>
                                      </div>
                                      </div>  
                                      </Modal.Title>
                                      <Modal.Body>
                                      <table class="table table-hover  table-striped table-bordered ml-4 ">
                                          <thead>
                                          <tr>
                                              <th>ProductName</th>
                                              <th>Amount</th>
                                              <th>ProductDesc</th>
                                              <th>Picture</th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                  
                                          {record.map((name)=>
                                              <tr>
                                              <td>{name.ProductName}</td>
                                              <td>{name.Amount}</td>
                                              <td>{name.ProductDescripation}</td>
                                              <td><img class="img-fluid" src={name.ProductPicture} style={{maxWidth:"40px"}}  alt=""/></td>
                                              <td><button className="cart-btn" tabIndex="0" onClick={(e) =>  addToCart(name.ProductId,name.Amount,name.ProductName,1)}>Add </button></td>
                                              </tr>
                                              )} 
                                          </tbody>
                                      </table>
                                      </Modal.Body>
                            </Modal>
                            
                        </div>
                    </div>
                    <div className="mid-section" data-offset="0">
                        <div className="page-section" id="featuredProducts">
                        <div class="d-flex align-content-around flex-wrap">
                        <h4 className="wla-outlet-name-md">Featured Items</h4>
                                        {loading ? (
                                            <Fragment>loading..</Fragment>
                                            ) : (
                                            Product.map((i) => (
                                            <Fragment>
                         
                           
                              
                                <div className="col-lg-4 col-6 outer-item-dv featured-dv pt-4">
                                
                                    <div className="item-outer">
                                        
                                                <div className="item-placeholder"><img src={i.ProductPicture} alt="Simply Pizza Veg-Country Side Pizza" className="bestseller-placeholder"></img>
                                                </div>
                                                <div className="item-details">
                                                    <div className="item-heading" > 
                                                        <h4 className="item-title">{i.ProductName}</h4>
                                                    </div>
                                                    <div className="cart-btn-outer">
                                                    <p className="price-p"><i className="la la-inr"></i> {i.Amount}</p>
                                                    <button className="cart-btn" tabIndex="0" onClick={(e) =>  addToCart(i.ProductId,i.Amount,i.ProductName,1)}>Add <i className="las la-plus"></i></button>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            
                          
                            </Fragment>
                            ))
                        )}
                        </div>
                        </div>
                        <div id="productList">
                          <div className="page-section1">
                            <h4 className="wla-outlet-name-md1">Veg Pizzas</h4>
                            <div className="inner-sub-page-sec">
                              <div className="row4">
                              <h5 className="wla-outlet-name-md-two w-100">Simply Pizza Veg</h5>
                              {loading ? (
                                            <Fragment>loading..</Fragment>
                                            ) : (
                                            Product1.map((i) => (
                                            <Fragment>
                              <div className="col-md-6 col-12 outer-item-dv">
                                <div className="item-dts">
                                  <div className="item-nw-outer1">
                                    <div className="item-nw-placeholder-outer1" >
                                      <div className="item-nw-placeholder1">
                                        <img src={i.ProductPicture} alt="Veg Pizzas" width="84" height="82"></img>
                                      </div>
                                    </div>
                                      <div className="item-content1">
                                        <div className="item-details1">
                                          <div>
                                            <div className="item-heading">
                                              <div className="item-tt-outer">
                                              <h4 className="item-title">{i.ProductName}</h4>
                                              </div> 
                                            </div>
                                            <p className="heading-customize">{i.ProductDescripation}</p><span className="customisable-span">Customisation Available</span></div><div className="cart-btn-outer"><span><p className="price-p">
                                              <i className="la la-inr"></i>{i.Amount}</p></span>
                                              <span><button className="cart-btn" tabIndex="0" onClick={(e) =>  addToCart(i.ProductId,i.Amount,i.ProductName,1)}>Add <i className="las la-plus"></i></button></span>
                                              
                                            </div></div></div></div>
                                           
                                    </div>
                                </div>
                                </Fragment>
                                ))
                            )}
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 cart-last">	
                    <div className="wla-cart-dv">
                        <h4 className="wla-outlet-Name-md mb-1">Your Cart</h4>
                        
                        <div className="cart-items-outer-main" id="cartDisplay">
                           
                            <div className="cart-items-outer" id="notnull">
                                <div className="row3">
                                    <div className="coll-8 cart-lft-btn">
                                        <div></div>
                                        {loading ? (
                                                <Fragment>loading..</Fragment>
                                                ) : (
                                                Cart.map((i) => (
                                                <Fragment>
                                                    
                                                    <div><p className="item-small-hd">{i.ProductName}</p>
                                                        <p className="item-price"><span>{i.quantity} x <i className="la la-inr"></i> {i.Amount}</span> </p>
                                                    </div>
                                                    
                                                </Fragment>
                                                ))
                                            )}
                                    </div>
                                        <div className="col-4 cart-rgt-btn">
                                            <div className="input-group quantity-btn">
                                            {loading ? (
                                                <Fragment>loading..</Fragment>
                                                ) : (
                                                Cart.map((i) => (
                                                <Fragment>
                                                     <div className="input-group-prepend" id="qty_minus">
                                                    <button className="qty-decrease" onClick={(e) => { decreaseQty(i.ProductId,i.quantity); 
                                                                                                        zeroQty(i.ProductId,i.quantity);
                                                                                                        }}><i className="las la-minus"></i></button>
                                                </div>
                                                <input type="hidden" id="act_sel_8360"></input>
                                                    <input type="text" className="form-control qtyVal p-0" value={i.quantity}></input>
                                                        <div className="input-group-prepend" id="qty_plus">
                                                            <button className="qty-increase" onClick={(e) => increaseQty(i.ProductId,i.quantity)}><i className="las la-plus"></i></button>
                                                        </div>
                                                </Fragment>
                                                ))
                                            )}
                                            </div>
                                        </div>
                                </div>
                            </div>
                        
                        <div className="cart-btn cart-btn-tp price-checkout" style={{display: "block"}}>
                            {loading ? (
                                <Fragment>loading..</Fragment>
                                    ) : (
                                    Cart.map((i) => (
                                    <Fragment>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            <span>Subtotal</span><span className="subTotalSpan"><i className="la la-inr"></i>{Cart.reduce((total, i)=>total+(i.Amount*i.quantity),0)}</span>
                                        </div>
                                        </Fragment>
                                    ))
                                )}
                        </div>
                        <div>
                        {loading ? (
                                <Fragment>loading..</Fragment>
                                    ) : (
                                    Cart.map((i) => (
                                    <Fragment>
                        <button  className="cart-btn1 price-checkout animatebtn" style={{display: "block"}}>
                          <div style={{display: "flex", justifyContent: "space-between"}} ><span>Checkout</span> 
                            <span className="totalSpan"><i className="la la-inr"></i>{Cart.reduce((total, i)=>total+(i.Amount*i.quantity),0)} </span>
                          </div>
                        </button>
                        </Fragment>
                                    ))
                                )}
                        </div>
                      </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
        </>
    );
  }
    

export default Cart;