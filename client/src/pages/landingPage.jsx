import React from "react";
import Container from 'react-bootstrap/Container';
import { Input } from "@/components/ui/input"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from '@/components/ui/blogCard';
import Footer from "@/components/ui/footer";
import { Link } from "react-router-dom";

function LandingPage() {
     const sample = [{
    featuredImage:"https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
    title: "Introduction to Programing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Tech"
  }, 
  {
    featuredImage:"https://nevadahotelsandsuites.com/wp-content/uploads/2025/06/Nightlife-in-Lagos.webp",
    title: "Lagos Night Life",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Socials"
  }, 
  {
    featuredImage:"https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/reimagining%20economic%20growth%20in%20africa%20turning%20diversity%20into%20opportunity/mgi-africa-growth-1412466945-standard-1536x1536.jpg?mw=677&car=42:25",
    title: "Africa Emerging Economies",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Economy"
  },
  ]

 return (
  <div>

    <Container fluid className="bg-blue-300 h-80 flex flex-col justify-center items-center">
       <h1 className='text-3xl font-bold text-gray-800 '>Welcome to MyBlog</h1>
        <p className='text-gray-700 mb-2'> Explore our unique categories</p>
        <div className='flex justify-center items-center gap-4'>
        <Input placeholder="Search your blogs here.." className="p-3  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100" />
        <Button variant="dark" className="flex items-center gap-2">Search</Button>
      </div>
      <div className="mt-7">
        <span className=" mr-5">
          <Link to={"/signup"}><Button  className="flex items-center gap-2 bg bg-blue-400 text-bold">Signup</Button></Link>
        </span>
        <span>
          <Link to={"/login"}><Button className="flex items-center gap-2 bg-blue-400">Login</Button></Link>
        </span>
      </div>
    </Container>
    <div className="flex flex-col justify-center items-center mt-6">
       <h1 className="flex items-center text-s">All Blogs</h1>
    </div>
    <div className="p-2">
      <Row xs={1} md={3} className="g-4">
        {sample.map((item, idx) => (
          <Col key={idx}>
            <BlogCard {...item}/>
          </Col>
        ))}
      </Row>
    </div> 
    <div className="mt-8">
      <Footer />
    </div> 
   </div>
  )
}

export default LandingPage
