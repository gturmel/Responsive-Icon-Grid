# Responsive Icon Grid Plan

We are tasked with making a responsive icon grid similar to [this](http://tympanus.net/Blueprints/ResponsiveIconGrid/). We're going to be using HTML to build, Sass to style, and jQuery for the animation part of the website.

## HTML Layout:

### Needs:

* In the Body, a container that holds our grid.
   * Our grid will be 2 rows of three columns.
      * Each grid item will have 4 elements inside of it
         1. The Icon
            * find some cool ones from Google Icon font. Lets not use Font Awesome, for a change.
         2. The Dash
            * Probably just an element with no content, just a border. It doesn't have to change size, just position and color.
         3. The Name: Maybe tie to Icon.
            * needs to change color and position on hover
         4. The Second Name.
            * color: same as background of body, all the time.
            * Changes position

## CSS Layout:

1. Body: super general styling. Background color, a cool font stack.
2. Grid: Not much, positional elements. Center, and some top margin
3. Grid Item: some border shenanigans with all the others, depends on position in grid.
   * Grid Item Hover: color.
4. Icon: color, size, center align, some padding top.
   * another class for the altered view for jQuery animation possibly! Only possibly.
5. Icon-hover: color, (this may be easier in jQuery...
6. Dash - border, nothing contained inside.
7. Name: color, size,
   * Name-hover: color
8. Second: name: keeps color, just moves on hover.

@mediaQuery: Two breakpoints:

Starts at 3 colums, two rows.
changes to 2 col, 3 rows
1 col, 6 rows.

Sass can do this, we learned this yesterday! Maths and stuff.
Won't go more than 3 cols.

Blue used: #47a3da
For grid border: 	color: #ddd
For bckrnd, font on hover: #fff

## jQuery Plan:

On hover:
* Background color changes.
* Icon and font color changes for Grid Item, Icon, Dash, and Name.
   * Not second name! Just positional things here.
* Name and Dash switch spots
* Icon animates down;
* Dash Animates up;
* Name Animates down;
* Second Name animates up a bit.

Transition only takes about .25 second/250 ms.
Color is instant.
