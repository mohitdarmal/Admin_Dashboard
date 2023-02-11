import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import TopHeader from "../../Components/TopHeader.js/TopHeder";
import Heading from "../../Components/Heading";
import Card from "../../Components/Card/Card";
import BarChart from "../../Components/Charts/BarChart";

import "../../App.css"
import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return(
        <>
             <div className="wrapper">
                {/* START LEFTSIDEBAR */}
                    <LeftSideBar />  
                {/* END LEFTSIDEBAR */}  

                {/* START PAGE CONTENT START */}            
                  <div className="contents">
                 

                    {/* START TOP HEADER */}
                      <TopHeader />
                    {/* END TOP HEADER */}

                    {/* START CONTETN */}
                      <div className="page_content pt-5">
                             <Container>
                                 <Heading headingClass="page-title" heading="Information" />
                            </Container>

                            <Container>
                                <Row className="pt-3 card_box_sec">
                                    <Col className="col-md-3">
                                        <Card headingClass="counting_no voilet_color" countingNumber="128" cardName="Total Products" />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Card headingClass="counting_no oceanGreen" countingNumber="53" cardName="Total Sales" />
                                    </Col>
                                    <Col className="mobile_half_width col-md-3">
                                        <Card headingClass="counting_no blueColor" countingNumber="40" cardName="Total Purchase" />
                                    </Col>
                                    <Col className="mobile_half_width col-md-3">
                                        <Card headingClass="counting_no purple_color" countingNumber="13" cardName="Total Warehouse" />
                                    </Col>
                                </Row>
                            </Container>

                            <Container className="py-5">
                            <Row>
                            <Col>
                                    <BarChart />
                                    </Col>
                                    </Row>
                            </Container>


                      </div>
                    {/* START CONTETN */}
                   
                  </div>
                {/* END PAGE CONTENT START */}            
             </div>
        </>
    )
}

export default Dashboard;