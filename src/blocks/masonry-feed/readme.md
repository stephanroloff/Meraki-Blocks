0 - Download ACF PRO: 

Go to https://www.advancedcustomfields.com/my-account/
then go to "licenses" and then "download" (it's a zip folder)


1 - Create a ACF Field Group called "Masonry Galleries"

2 - Then create a Repeater (work just with ACF PRO):

  - Label Name: Images
    Field Name: images
    Type: Repeater

3 - Then create the subfields (inside the repeater):

  - Label Name: Image
    Field Name: image
    Type: image

  - Label Name: Name
    Field Name: name
    Type: text

  - Label Name: Description
    Field Name: description
    Type: text

  - Label Name: Link (Slug)
    Field Name: link
    Type: text

    Placeholder: /project-name




BUGS

-spinner
-autoprefixer bugs

autoprefixer: grid-gap only works if grid-template(-areas) is being used
autoprefixer: auto-fill value is not supported by IE
autoprefixer: end value has mixed support, consider using flex-end instead

