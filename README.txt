The goal of responsive design:
    1. responsive design changes the view or "respond" dependent on design.
    2. Bootstrap is the most popular framework.

What is Bootrap?
    1. It is mostly CSS but includes HTML, CSS it will make your project responsive
    2. There is prebuilt templates
        a. Includes design templates for typography, forms, buttons, tables, navigation, modals, etc.
    3. Often reffered to as twitter Bootrap
        a. Mark Otto and Jacob Thornton at twitter

How to use Bootrap?
    1. Download and run locally
        a. getbootstrap.com
    2. Include Bootstrap from Content Delivery Network (CDN)
        a. MaxCDN 
        b. Must also include jQuery in project
        c. Using CDN may allow sites to load faster for users that have records in cache 
        from other sites that use the same CDN.

Scripts needed: Bootrap 3.3
    1. Include this CSS script in the header
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	2. Include the JavaScript in the body
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    3. Include the jQuery in the body
	<!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

Bootstrap Importance:
    1. Bootstrap is Mobile first
    2. To ensure proper rendering and touch zooming, you must have the following tag in the <head> element
    <meta name="viewport" content="width=device-width, initial-scale=1">
        a. This sets the width = the width of the screen on the device being used
        b. Also sets the initial zoom scale to 1 when the page is loaded

Containers:
    1. Bootstrap requires a containing element to wrap site content
    2. There are two container classes to choose from:
        a. .container provides a responsive fixed width container with some padding
        b. .container-fluid provides a full width container, spanning the entire width of the viewport
    3. The Bootstrap grid is what enables the responsive design
    4. Bootstrap breaks the page into 12 columns and any number of rows
    5. You can put content in a single column or group them together.
    6. The columns will re-arrange automatically depending on screen size
    7. Example Columns:
        a. <div class="col-md-12">Span 12 columns</div>
        b. <div class="col-md-6">Span 6</div><div class="col-md-6">Span 6</div>
        c. <div class="col-md-4">Span 4</div><div class="col-md-8">Span 8</div>
        d. <div class="col-md-4">Span 4</div><div class="col-md-4">Span 4</div> 
        e. <div class="col-md-4">Span 4</div>

Table Cheat Sheet:
    1. Table
        a. <table></table>
    2. Table Row 
        a. <tr></tr>
    3. Table header
        a. <th></th>
    4. Table data
        a. <td></td>

Table Designs:
    1. Basic table has light padding and only horizontal dividers.  class=“table”
    2. Striped table adds zebra-stripes to a table.  class=“table-striped”
    3. Bordered table adds borders on all sides of the table and cells. class=“table-bordered”
    4. Hover tables enables a hover state on table rows.  class=“table-hover”

Images:
    1. Rounded corners will add rounded corners to an image. class=“img-rounded”
    2. class=“img-circle” will shape the image to a circle.
    3. class=“img-thumbnail” will turn the image into a thumbnail

Responsive Images
    1. Images come in all sizes as do screens.
    2. class=“img-responsive” will automatically adjust to the fit of the screen and the parent element

Buttons:
    1. There are 7 Button styles:
        a. .btn-default
        b. .btn-primary
        c. .btn-success
        d. .btn-info
        e. .btn-warning
        f. .btn-danger
        g. .btn-link
    2. 4 Button Sizes:
        a. .btn-lg
        b. .btn-md
        c. .btn-sm
        d. .btn-xs
    3. Can be used with <a> <button> <input> elements





