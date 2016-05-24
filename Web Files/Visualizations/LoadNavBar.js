'use strict';

var navBarText = "<header>\n\
\t<div id='title'>\n\
\t\t<h1><a href='../index.html'></a></h1>\n\
\t</div>\n\
\t<nav class = 'navbar-fixed-top'>\n\
<a class='navbar-brand' href='../index.html'>\n\
        <img alt='Brand' src='../images/nav_logo.png'>\n\
      </a>\n\
\t\t<ul>\n\
\t\t\t<li><a href='../index.html'><p>Home</p></a></li>\n\
\t\t\t<li><a href='../Explore.html'><p>Explore Our Visualizations <span class='glyphicon glyphicon-chevron-down'></span></p></a>\n\
\t\t\t\t<ul class = 'sections'>\n\
\t\t\t\t\t<li><p>About the School <span class='glyphicon glyphicon-chevron-right'></span></p>\n\
\t\t\t\t\t\t<ul>\n\
\t\t\t\t\t\t\t<li><a href='SchoolSize.html'>School Size</a></li>\n\
\t\t\t\t\t\t\t<li><a href='APIB.html'>AP & IB Courses</a></li>\n\
\t\t\t\t\t\t\t<li><a href='AttendanceZones.html'>School Boundaries</a></li>\n\
\t\t\t\t\t\t</ul>\n\
\t\t\t\t\t</li>\n\
\t\t\t\t\t<li><p>About the Students <span class='glyphicon glyphicon-chevron-right'></span></p>\n\
\t\t\t\t\t\t<ul>\n\
\t\t\t\t\t\t\t<li><a href='College.html'>Graduates Enrolled in College</a></li>\n\
\t\t\t\t\t\t\t<li><a href='Demographics.html'>Demographics</a></li>\n\
\t\t\t\t\t\t\t<li><a href='ELL.html'>English Language Learners</a></li>\n\
\t\t\t\t\t\t\t<li><a href='FRPL.html'>Free and Reduced Price Lunch</a></li>\n\
\t\t\t\t\t\t</ul>\n\
\t\t\t\t\t</li>\n\
\t\t\t\t\t<li><p>About the Academics <span class='glyphicon glyphicon-chevron-right'></span></p>\n\
\t\t\t\t\t\t<ul>\n\
\t\t\t\t\t\t\t<li><a href='TestScoresInDepth.html'>Test Scores</a></li>\n\
\t\t\t\t\t\t</ul>\n\
\t\t\t\t\t</li>\n\
\t\t\t\t\t<li><p>Miscellaneous <span class='glyphicon glyphicon-chevron-right'></span></p>\n\
\t\t\t\t\t\t<ul>\n\
\t\t\t\t\t\t\t<li><a href='POI.html'>Nearby Services</a></li>\n\
\t\t\t\t\t\t\t<li><a href='HomePrices.html'>Housing Prices</a></li>\n\
\t\t\t\t\t\t</ul>\n\
\t\t\t\t\t</li>\n\
\t\t\t\t</ul>\n\
\t\t\t</li>\n\
\t\t\t<li><a href='MYO.html'><p>Custom Visualizations</p></a></li>\n\
\t\t\t<li><a href='../DownloadData.html'><p>Download The Data</p></a></li>\n\
\t\t</ul>\n\
\t</nav>\n\
</header>";

var footerText = "<div class='wrapper'>\n\
            <p id='hidden'>a</p>\n\
            <div class='push'></div>\n\
        </div>\n\
        <div class='footer'>\n\
            SPSInteractive:&nbsp;&nbsp;&nbsp;&nbsp;\n\
            \t\t\t<a href='../FAQ.html'><span>FAQs</span></a>&nbsp;&nbsp;|&nbsp;&nbsp;\n\
\t\t\t<a href='../ContactMe.html'><span>Contact Us</span></a>\n\
        </div>";

$(document).ready(function() {
    $("body").prepend(navBarText);
    $("body").append(footerText);
});
