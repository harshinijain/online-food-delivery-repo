
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet"
    type="text/css"
    href="style.css">
     
    <title>ONLINE FOOD DELIVERY</title>
  </head>
         <body>
          <nav>
            <div class="logo">MEALS ON WHEELS</div>
            
           <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="order-now">Order Now
            </button>

          </nav>
          <div class="circle-image">
            <img src="https://static.vecteezy.com/system/resources/previews/013/636/845/non_2x/women-chef-logo-with-friendly-face-free-vector.jpg" alt="">
          </div>
          <h1><b>"Taste The Magic!"</b></h1> 
          <br>
          <h1>
            <b><center>WELCOME TO MEALS ON WHEELS</center></b>
          </h1>
          <br>

      
          <h1><b><center>HOME</center></b></h1>
          <p><center>Meals on Wheels is a food delivery service that provides a variety of delicious meals to your doorstep. We offer a wide range of breakfast, lunch, and dinner options that are sure to satisfy your taste buds. Our team of experienced chefs uses only the freshest ingredients to create mouth-watering dishes that are perfect for any occasion. Whether you're looking for a quick and easy meal or a gourmet feast, Meals on Wheels has you covered. Order now and taste the magic!</center></p>
          <br>
          <h1><b><center>ABOUT US</center></b></h1>
          <p><center>Meals on Wheels is a food delivery service that provides a variety of delicious meals to your doorstep. We offer a wide range of breakfast, lunch, and dinner options that are sure to satisfy your taste buds. Our team of experienced chefs uses only the freshest ingredients to create mouth-watering dishes that are perfect for any occasion. Whether you're looking for a quick and easy meal or a gourmet feast, Meals on Wheels has you covered. Order now and taste the magic!</center></p>
          <br>
          <h1><b><center>CONTACT US</center></b></h1>
          <p><center>Phone: 123-456-7890</center></p>
          <br>
          <h1><b><center>OUR FOOD MENU</center></b></h1>
           <form method="POST" action="cart.html">
             <div class="menu-section">
               <center><h2><b>BREAKFAST</b></h2></center>
               <div class="food-item">       
                <center><img src="https://static.vecteezy.com/system/resources/thumbnails/047/825/569/small_2x/idli-against-transparent-background-free-png.png"></center>
                <center><b>IDLI-RS.3</b></center>
                <center><input type="number" name="idli-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button veg-button" name="food-item" value="IDLI-RS.3">ADD TO CART</button></center>
                </form>
              </div>
               <div class="food-item">
                 <center><img src="https://superfoodambarvada.in/wp-content/uploads/2022/10/vada-sambar.png"></center>
                 <center><b>VADA-RS.2</b></center>
                 <center><input type="number" name="vada-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                 <form action="cart.html" method="post">
                 <center><button class="add-to-cart-button veg-button" name="food-item" value="VADA-RS.2">ADD TO CART</button></center>
                 </form>
               </div>
               <div class="food-item">
                 <center><img src="https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-dosa-with-sambar-and-chutneys-png-image_13091145.png"></center>
                 <center><b>DOSA-RS.4</b></center>
                 <center><input type="number" name="dosa-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                 <form action="cart.html" method="post">
                 <center><button class="add-to-cart-button veg-button" name="food-item" value="DOSA-RS.4">ADD TO CART</button></center>
                 </form>
               </div> 
               <center><h2><b>LUNCH</b></h2></center>
               <div class="food-item"> 
                <center><img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-chicken-biryani-traditional-indian-cuisine-png-image_10266309.png"></center>
                <center><b>CHICKEN BRIYANI-RS.100</b></center>
                <center><input type="number" name="chicken-briyani-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button non-veg-button" name="food-item" value="CHICKEN BRIYANI-RS.100">ADD TO CART</button></center>
                </form>
               </div>
               <div class="food-item"> 
                <center><img src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-fresh-chicken-stir-fried-with-noodles-png-image_11627325.png"></center>
                <center><b>CHICKEN NOODLES-RS.150</b></center>
                <center><input type="number" name="chicken-noodles-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button non-veg-button" name="food-item" value="CHICKEN NOODLES-RS.150">ADD TO CART</button></center>
                </form>
               </div>
                 
               <div class="food-item">
                <center><img src="https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-fried-rice-and-fried-chicken-png-image_11946606.png"></center>
                <center><b>CHICKEN FRIED RICE-RS.150</b></center>
                <center><input type="number" name="chicken-fried-rice-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button non-veg-button" name="food-item" value="CHICKEN FRIED RICE-RS.150">ADD TO CART</button></center>
                </form> 
               </div>
               <center><h2><b>DINNER</b></h2></center>
               <div class="food-item">
                <center><img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-kulcha-naan-vegetarian-cuisine-roti-indian-cuisine-png-image_10264070.png"></center>
                <center><b>ROTI-RS.50</b></center>
                <center><input type="number" name="roti-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button veg-button" name="food-item" value="ROTI-RS.50">ADD TO CART</button></center>
                </form>
               </div>
               <div class="food-item">
                <center><img src="https://png.pngtree.com/png-clipart/20230614/ourmid/pngtree-vegetable-soup-png-image_7125504.png"></center>
                <center><b>SOUP-RS.50</b></center>
                <center><input type="number" name="soup-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button veg-button" name="food-item" value="SOUP-RS.50">ADD TO CART</button></center>
                </form>
               </div>
                 
               <div class="food-item"> 
                <center><img src="https://the7spices.com/wp-content/uploads/2023/12/Bhatura_1_Pcor_Poori_2_Pcs.png"></center>
                <center><b>POORI-RS.50</b></center>
                <center><input type="number" name="poori-quantity" value="0" min="0" max="10" class="quantity-input"></center>
                <form action="cart.html" method="post">
                <center><button class="add-to-cart-button veg-button" name="food-item" value="POORI-RS.50">ADD TO CART</button></center>
                </form>
              </div>
 
               <!-- Order Form -->
    <section id="order">
        <center><h2>Order Now</h2></center>
        <form onsubmit="submitOrder(event)">
            <label for="name">Your Name:</label>
            <input type="text" id="name" required>

            <label for="address">Address:</label>
            <input type="text" id="address" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" required>

            <center><h3>Cart Items</h3>
                
            <ul id="cart-items"></ul>
            <p><strong>Total: $<span id="total-price">0.00</span></strong></p>
            
        </center>
            <center>
                <button type="submit" style="padding:10px 20px; border:none; border-radius:5px; cursor:pointer; background-color:#4CAF50; color:#fff;">PLACE ORDER</button>
               </center>
               
        </form>
    </section>
    <script src="script.js"></script>
    
    </body>      
</html>