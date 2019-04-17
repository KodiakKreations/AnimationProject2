export const portfolioJson = [
  {
    title: "Augmented Reality",
    purpose:
      "To generate web-based animated content using A-Frame, an augmented reality library which uses paper-based markers",
    "//":
      "THE TECH ARRAY BELOW CAN HAVE ANY NUMBER OF ELEMENTS. JUST ENSURE A URL IS ENTERED FOR THE VALUES",
    tech: [
      { tool1: "http://tiny.cc/hiro" }, 
      {tool2: "https://github.com/artoolkit"}
    ],
    desc: "Using ARToolkit I was able to rcreate an AR scene of my name that uses various shape elements and postioning. The biggest challenge with Augmented Reality was building the different elements and knowing how to position them. For example, figuring out if the elements were positioned through the Javascript or through the HTML?",
    url: "https://codepen.io/officialmattkean/pen/EJZXpZ"
  },
  {
    title: "splitText / Draggable",
    purpose:
      "To generate web-based animated content and incorporate keyframes and animation paths using Webflow",
    tech: [{ SplitText: "https://greensock.com/SplitText" }, { Draggable: "https://shopify.github.io/draggable/" }],
    desc: "",
    url: "https://codepen.io/officialmattkean/pen/EMeaQM",
    url2: "https://codepen.io/officialmattkean/pen/WmgbNR"
    
  },
  {
    title: "Adobe Animate or Webflow",
    purpose:
      "To generate web-based animated content and incorporate keyframes and animation paths using Adobe Animate",
    tech: [{MyWebflowLink: "https://mattk.webflow.io/"}, { tool1: "https://university.webflow.com/courses/interactions-and-animations-course" }, { tool2:"https://webflow.com/" }],
    desc: "Using webflow, I was able to animate a mock webpage in various ways such as adding a stagger for images when they are scrolled into view as well as animating text off to the side as you scroll away from them. Webflow seems like a very easy and conveinient way of creating a webpage with animations. Once you get used to how the controls work it is very 'drag-and-drop' in nature. This could be a great way for beginners to get started with web development and animation.",
    url: "./assets/webflow.pdf"
  },
  {
    title: "animation paths",
    purpose:
      "To learn how to incorporate animation along a path using Greensock",
    tech: [{ GSAPpathDataToBezier: "https://greensock.com/path-animation" }],
    desc: "",
    url: "https://codepen.io/officialmattkean/pen/oVPjZd"
  },
  {
    title: "drawSVG",
    purpose:
      "To learn how to use Greensock's plugins: drawSVG, splitText, Draggable",
    tech: [{ GSAPDrawSVG: "https://greensock.com/drawSVG" }],
    desc: "Using GSAP's DrrawSVG I was able to animate an image of a Xbox by 'drawing' the lines with Javascript. DrawSVG was a lot easier to implement than I expected it to be. There wasn't really a challenge with implementing this. It would just require the developer to know which direction the SVG needs to be drawn (i.e staggerFrom in this case)",
    url: "https://codepen.io/officialmattkean/pen/gEdORy"
  },
  {
    title: "Banner Ad",
    purpose:
      "To incorporate timelines and employ scripting to control and animate sprite images",
    tech: [{ GSAPplatform: "https://www.lynda.com/HTML-tutorials/Using-individual-files-GSAP-platform/373558/420208-4.html" }],
    desc: "This was another example of using sprites to create an animation. This time was interesting because of creating the actual steps within the animation using GSAP's timeline feature instead of letting CSS take care of everything.",
    url: "./assets/Lab9/banner_ad.html"
  },
  {
    title: "morphSVG",
    purpose:
      "To learn how to use Greensock's plugin called morphSVG to morph between two SVG images",
    tech: [{ MorphSVG: "https://greensock.com/morphSVG" }],
    desc: "Using MorphSVG I morphed an image of my first initial into an image of my second initial. MorphSVG is an interesting tool if used correctly. I struggled with this assignment because the two shapes did not function together well when they were being morphed. I believe that having two SVG's that are not dissimilar helps with MorphSVG. I was surprised at how easy it actually is to implement the code. Just one line of code with Tweenmax can mke the whole animation happen!",
    url: "https://codepen.io/officialmattkean/pen/moqeYQ"
  },
  {
    title: "timelines",
    purpose:
      "To incorporate timelines and employ scripting to control and animate svg elements",
    tech: [{ GSAPTimeline: "https://greensock.com/timelinelite" }],
    desc: "This lab was practice for using GSAP's timeline function. I struggled with this lab. I could get basic movements(scaling) to work but I could not get staggering to work. I think that I was trying to get it to work on elements that don't accept the stagger function. It is something that I will need to look at in the future.",
    url: "https://codepen.io/officialmattkean/pen/OqbmaR"
  },
  {
    title: " SVG Bending Line ",
    purpose:
      " To understand SVG path data and how TweenMax can animate between 2 different sets of them ",
    tech: [
      { TweenMax: "https://greensock.com/tweenmax" },
      { SVGPathBuilder: "https://codepen.io/anthonydugois/pen/mewdyZ" }
    ],
    desc:
      "Using the SVG Path builder, I created 2 svg paths and used the generated path coordinates which TweenMax used to animate. The result was a bending line similar to a wagging tail. ",
    url: " https://codepen.io/officialmattkean/pen/RdoKvL "
  },
  {
    title: "Toggle",
    purpose:
      "To construct a popular user-interface such as the toggle that incorporates animation and to maniuplate elements based on user-intitiated events",
    tech: [{ jQueryToggle: "https://www.w3schools.com/jquery/eff_toggle.asp" }],
    desc: "Using jQuery I animated a HTML toggle switchto appear like a hypnotising wheel. This toggle assignment was tricky for me. The biggest problem I had with it was how to affect elements that were placed as a prent element of the trigger. It seemed that either I could affect the parent of the trigger or the child of the trigger but not both, but eventually I was able to figure it out.",
    url: "https://mattkean.github.io/animationAssignment1/"
  },
  {
    title: "jQuery animation",
    purpose:
      "To learn and use jQuery's slide and fade effects, jQuery UI's animations, and Penner's easing plugin",
    tech: [{ FadeOutFadeIn: "https://www.w3schools.com/jquery/jquery_fade.asp" }, {SlideUpSlideDown: "https://www.w3schools.com/jquery/jquery_slide.asp"} ],
    desc: "This was a practice in using jQuery animations. This lab wasn't too much of a challenge to me; however it was interesting to find out that the animation would have to be used on both elements in order to get one of them to be hidden. When you see it in action it looks like just one fluid animation not two seperate animations happening at the same time.",
    url: "https://codepen.io/officialmattkean/pen/LvWqeK"
  },
  {
    title: "@keyframes",
    purpose:
      "To incorporate pure CSS keyframe animations along with transforms and transitions",
    tech: [{ CSSKeyframes: "https://css-tricks.com/snippets/css/keyframe-animation-syntax/" }],
    desc: "Using CSS Keyframes I was able to poduce a spinner image of my initials. This concept was not a new one to me, having learned about keyframes in a previous class so there were no challenges other than deciding what to do for the animation.",
    url: "./assets/lab5/index.html"
  },
  {
    title: "Sprite animation",
    purpose:
      "To emulate Twitter's Like button via sprite-based animation using keyframes and steps",
    tech: [{ SpriteAnimation: "https://designmodo.com/steps-css-animations/" }],
    desc: "This lab was a test in how to implement a sprite animation by adjusting the background position of an image by using transition with steps. While doing this lab I learned more about how a sprite animation actually works. Its interesting that with one image file you can create a full animation using transition steps.",
    url: "./assets/lab4/index.html"
  },
  {
    title: "Storyboard",
    purpose:
      "To develop a simple storyboard to describe an animated sequence or a user interaction.",
    tech: [{ tool1: "https://google.ca" }],
    desc: "",
    url: ""
  },
  {
    title: "The 12 principles",
    purpose:
      "To explain the basic elements and principles of animation/motion graphics in support of web-based interface design",
    tech: [{ tool1: "https://google.ca" }],
    desc: "",
    url: ""
  }
];
