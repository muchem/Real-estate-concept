let App = angular.module('App',[]);
App.directive('navBar',function(){
    return{
        template: ` <nav class="navbar navbar-expand-lg navbar-light bg-light top-nav">
             <a class="navbar-brand" href="#">
                 <img src="https://images.vexels.com/media/users/3/157257/isolated/preview/d3bd73477873ff05a127e686ee688f65-black-and-white-house-icon-by-vexels.png"
                     alt="Logo" style="width:40px;">
             </a>
             <a class="navbar-brand" href="index.html">Triliio</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>

             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                         <a class="nav-link" href="sell.html">Sell</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="main.html">Buy</a>
                     </li>
                     
                     <li class="nav-item">
                         <a class="nav-link" href="agents.html">Find An Agent</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Home Loans</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Services</a>
                     </li>
                    <li class="nav-item">
                         <a class="nav-link" href="about.html">About Us</a>
                    </li>
                 </ul>
    <div class = "right-items">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle = "modal" 
        data-target = "#loginModal"
        >Log in</button>

        <span><button class="btn btn-success my-2 my-sm-0"style = "margin-left:10px;">Sign up</button></span>
                  
            </div>
        </div>
    </nav>
    <!-- The Modal -->
    <div class="modal fade" id="loginModal">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Welcome to Triliio</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <h5><strong>Log in</strong></h5>
                    <form>
                        <div class="form-group">
                            <label for="Email1">Email address</label>
                            <input type="email" class="form-control" id="Email1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                           
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" id="Password"
                                placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Check">
                            <label class="form-check-label" for="Check">Remember Me</label>
                        </div>
                        <button type="submit" class="btn btn-success">Log in</button>
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

`
    }
})