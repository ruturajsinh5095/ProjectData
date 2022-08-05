CREATE DATABASE LAPINOZ;

USE LAPINOZ;

CREATE TABLE Cities (
	city_id INT NOT NULL,
    city_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(city_id)
);

INSERT INTO Cities VALUE 
(1, "Agra"),(2, "Ahmedabad"),(3,"Ajmer"),
(4, "Ambala Cantt"),(5, "Ambala City"),(6,"Amreli"),
(7, "Amritsar"),(8, "Anand"),(9, "Ankleshwar"),
(10, "Ayodhya"),(11, "Azamgarh"),(12, "Baddi"),(13,"Bahraich"),
(14,"Bardoli"),(15,"Batala"),(16,"Bathinda"),(17,"Bangaluru"),
(18, "Bharuch"),(19, "Bhavnagar"),(20, "Bhilai"),(21, "Bhilwara"),
(22, "Bhuj"),(23, "Bikaner"),(25, "Bilimora");


CREATE TABLE Outlet (
	Outlet_id INT NOT NULL,
    OutletName VARCHAR(30) NOT NULL,
    OutletAddress VARCHAR(45) NOT NULL, 
	city_id INT NOT NULL,
    PRIMARY KEY(Outlet_id),
    CONSTRAINT fk_Outlet_city FOREIGN KEY (Outlet_id) REFERENCES Cities(city_id)
);

INSERT INTO Outlet VALUE
(1,"Sanjay Place,Agra","Sanjay Place,Agra",1),
(2,"Kargil Crossing,Agra","Kargil Crossing,Agra",1),
(3,"Sadar Bazar,Agra","Sadar Bazar,Agra,Agra",1);

INSERT INTO Outlet VALUE
(4,"Science City Road,Ahmedabad","Science City Road,Ahmedabad",2),
(5,"South Bopal,Ahmedabad","South Bopal,Ahmedabad",2),
(6,"Nikol,Ahmedabad","Nikol,Ahmedabad",2),
(7,"Bapunagar,Ahmedabad","Bapunagar,Ahmedabad",2),
(8,"Vastral,Ahmedabad","Vastral,Ahmedabad",2);

SELECT * FROM Outlet;


CREATE TABLE Category (
	CategoryId INT NOT NULL,
    ListingSeqNo INT,
    Categoryname VARCHAR(20) NOT NULL,
    PRIMARY KEY(CategoryId)
);

INSERT INTO Category VALUE
(1,1,"Featured Iteams"),
(2,2,"BOGO"),
(3,3,"Veg Pizzas");

SELECT * FROM Category;

CREATE TABLE Product (
	ProductId INT NOT NULL,
    Amount decimal(8,2) NOT NULL,
    ProductName VARCHAR(40) NOT NULL,
    ProductDescripation VARCHAR(40) NOT NULL,
    ProductPicture VARCHAR(150) NOT NULL,
    CategoryId INT NOT NULL,
    PRIMARY KEY(ProductId),
    CONSTRAINT fk_Product_categotryid FOREIGN KEY (CategoryId) REFERENCES Category(CategoryId)
);

INSERT INTO Product VALUE
(1,165,"Country Side Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-1578568918.jpeg",1),
(2,165,"Spring Fling Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-1578568905.jpeg",1),
(3,205,"Cheezy-7 Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-1578568978.jpeg",1),
(4,205,"Farm Villa Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-827281-1595939023.jpeg",1),
(5,205,"Paneer Tikka Butter Masala Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-1578568992.jpeg",1),
(6,245,"Korma Special Pizza","Featured pizzas","https://static.uengage.in/uploads/5/image-1578572482.jpeg",1);

ALTER TABLE Product MODIFY Amount decimal(8,2) NOT NULL DEFAULT 00;
ALTER TABLE Product MODIFY ProductName VARCHAR(40) NOT NULL DEFAULT "NAN";

SELECT * FROM Product;


CREATE TABLE Cart (
	cart_iteam_id INT auto_increment,
	ProductId INT ,
    Amount decimal(8,2) ,
    ProductName VARCHAR(40) ,
    PRIMARY KEY(cart_iteam_id),
    CONSTRAINT fk_Cart_ProductId FOREIGN KEY (ProductId) REFERENCES Product(ProductId)
);

ALTER TABLE Cart
  ADD quantity INT 
    AFTER ProductName;

SELECT * FROM Cart;

DELETE FROM Cart;


