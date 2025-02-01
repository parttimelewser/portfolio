import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return(
        <div className = "w-full h-full bg-white text-black items-start font-[family-name:var(--font-quattrocento)]">
                <section className = " fixed flex-col sm:p-4 text-xl border-r border-black h-full">
                    <h1 className = " ml-1 font-[family-name:var(--font-rozha-one)] mb-2">
                    lew's documentation
                    </h1>
                    
                    <div className = "w-45 h-8 font-[family-name:var(--font-rozha-one)] hover:text-white hover:bg-black">
                        <Link 
                        href = "../">
                        <h1 className = "ml-1">
                        back to main
                        </h1>
                        </Link>
                    </div>

                    <nav className = "flex-col w-45 justify-center sm: p-8 text-sm space-y-3 z-10">

                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#welcome">
                        welcome! 
                        </a>

                        <h2 className =  "font-[family-name:var(--font-rozha-one)]">
                         2025
                        </h2>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#portfolio">
                        this portfolio - specifically
                        </a>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#lewsworkshop">
                        lewswork.shop
                        </a>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#keyboard">
                        split keyboard pcb
                        </a>
                        <h2 className =  "font-[family-name:var(--font-rozha-one)]">
                         2024
                        </h2>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#pid">
                        pid line-following robot
                        </a>

                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#capcap">
                        open cv study-aid
                        </a>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#claw">
                        arduino aluminum claw
                        </a>

                        <h2 className =  "font-[family-name:var(--font-rozha-one)]">
                        2023
                        </h2>
                        <a
                        className = "block hover:text-[#7FA1C3]"
                        href = "#chair">
                        cardboard chair
                        </a>
                    
                    </nav>
                </section>

                <div className = "flex flex-row w-full h-full">
                <span
                className = "inline-block h-full w-1/4"
                >
                </span>

                <section className = "flex flex-col w-2/3">
                    <div id = "welcome" className = "mb-80">
                        <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl mb-20 mt-80">
                        welcome to my documentation :) 
                        </h1>

                        <p>
                        This is a little page where I detail my experience, decisions and reflections of my project and design involvement! 
                        Though slightly unserious and improper, I hope this page can serve useful to those pursuing similar projects or looking for insight into my abilities as an engineering student. 
                        </p>

                        <p className = "mt-8">
                        To fill space, here's some fun facts about me!  
                        </p>

                        <div className = "text-sm space-y-3 ml-1 italic bold ">
                            <p className = "mt-8"> - I love to host dinner parties (friendsgiving,friendsmas, ALL of it)</p>
                            <p> - I'm currently reading the "before the coffee gets cold" series! </p>
                            <p> - I broke a blender in grade 6 because i forgot about a spoon i put in it </p>
                            <p > - I'm left handed </p>
                        </div>
                    </div>

                    <div id = "portfolio" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            this portfolio - specifically
                            </h1>

                            <h1 className = "text-lg italic">
                            January 2025
                            </h1>
                        </div>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        <p className = "mb-4">
                         I coded this website myself! Using <b>Next.js</b> and <b>Tailwind CSS</b> :) 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4">
                         process
                        </h2>
                        <p className = "mb-2">
                        I coded this portfolio using <b>Next.js</b> and <b>Tailwind CSS</b>! Previous to this, I had little to no experience coding. Only coding for class and an introductory certification to <b>Python</b> during high school (<a href = "https://schulichignite.com/beginner/" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel = "noopener referrer">schulich ignite</a>). 
                        My motivation to make a portfolio stemmed from wanting to have a place to showcase my achievements and projects. I'm really proud of how it turned out given the amount of time (about a week) and learning-curve 
                        I overcame approaching this project. Originally, the design for this project was more complicated than my abilities are currently able to achieve. However, I recognize there is a lot of room for improvement
                        in the future, where those ideas may be useful :) 
                        </p>

                        <p className = "mb-2">
                        I made the original wireframes using <b>Figma</b>, all of which are linked <a href = "https://www.figma.com/design/wHVaqFbZH5jz4eA16r4wAL/Portfolio?node-id=0-1&m=dev&t=H449c0exwjjeuTYF-1" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer" > here </a>!
                        </p>

                        <p className = "mb-2">
                        After some time, I realized it was really daunting to complete a project of this size. So I started by designing something more simple and with the help of the internet, I built this website! I found that trial and error
                        provided the most useful learning experience for this task. After watching a video or two on the basics of <b>Next.js</b> and <b>Tailwind CSS</b>, it was easiest to have <a href = "https://nerdcave.com/tailwind-cheat-sheet" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer" >this</a> Tailwind cheat sheet open and actively search 
                        any questions I had considering layout and specific terminology for positioning and similar features. 
                        </p>

                        <p className = "mb-6">
                         On this website, I really wanted to have some kind of typewriter animation. Which was a learning curve to say the least. After scouring the internet I found a few links and examples (<a href = "https://vanntile.com/blog/composited-typing-animation/" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">here</a> and <a href = "https://dev.to/lazysock/make-a-typewriter-effect-with-tailwindcss-in-5-minutes-dc" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">here</a>).
                         To my understanding, the animation on the front page increases the width of the "item", here it is the text box as the animation progresses to incrementally reveal the text. Here, the keywords in the <i>"className"</i> of the desired text are:
                        </p>

                        <p className = "mb-1 text-sm ml-1">
                            <b>inline-flex:</b> ensures that everything is aligned in a single row
                        </p>

                        <p className = "mb-1 text-sm ml-1">
                            <b>overflow-x-hidden:</b> indicates that any text exceeding the width of the text box is not visible
                        </p>

                        <p className = "mb-1 text-sm ml-1">
                            <b>whitespace-nowrap:</b> makes sure all text does not wrap onto a new line
                        </p>

                        <p className = "mb-6 text-sm ml-1">
                            <b>animate-type:</b> applies the animation named <i>"type"</i> defined in the page <i>"tailwind.config.ts"</i>
                        </p>

                        <p className = "mb-6">
                            To write out animations in <i>"tailwind.config.ts"</i>, they must be defined in animations and keyframes (in the <i>export default</i> function). 
                            Within the brackets of <i>"animation"</i>, the name, duration, pacing, repetition and when to apply certain styles is defined. It will look something like this -- 
                            <b> type: 'type 2.7s ease-out .8s 1 normal none'</b> with each kind of animation separated by commas.
                        </p>

                        <p className = "mb-1 text-sm ml-1"><b>type:</b> animation name</p>
                        <p className = "mb-1 text-sm ml-1"><b>2.7s:</b> duration of animation</p>
                        <p className = "mb-1 text-sm ml-1"><b>ease-out:</b> how the speed of the animation changes, here it speeds-up towards the end (see also: ease-in, linear, etc.)</p>
                        <p className = "mb-1 text-sm ml-1"><b>0.8s:</b> time delay previous to the animation starting</p>
                        <p className = "mb-1 text-sm ml-1"><b>1:</b> number of iterations the animation should be played</p>
                        <p className = "mb-1 text-sm ml-1"><b>normal:</b> how the animation progresses through keyframes (see also: reverse, alternate, etc.)</p>
                        <p className = "mb-6 text-sm ml-1"><b>none:</b> when to apply any styling before and after the animation (see also: forwards, backwards and both) </p>

                        <p className = "mb-4">
                         The code in <i>"tailwind.config.ts"</i> should look similar to below. Where the % in keyframes indicates at what point in the animation (0% being the beginning and 100% the end) to change an element, in this case the width or opacity.
                        </p>

                        <Image
                                className="rounded-md mb-8 ml-1"
                                src="/animationcode.png"
                                alt="codecodecode"
                                width={400}
                                height={100}
                                priority
                        />

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4">
                         outcome
                        </h2>

                        <p>
                         Personally, I'm really pleased with how the website turned out! Though a bit finicky and a couple bugs, all of the animations and aesthetics feel very genuine and authentic to myself. Most importantly, they are all functional. I'm proud of
                         pulling this off and I hope that the amount of effort and time put into this project can be seen by those visiting this site! 
                        </p>
                    </div>

                    <div id = "lewsworkshop" className = "mb-20">
                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            lewswork.shop
                            </h1>

                            <h1 className = "text-lg italic">
                            January 2025 - Present
                            </h1>
                        </div>

                        <p className = "mt-10 mb-2">
                        My friends (<a href = "https://www.linkedin.com/in/hire-fred-yang/" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer">Fred </a> and <a 
                         href = "https://www.linkedin.com/in/isabellalinde/" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer">Isabella</a>) 
                        and I are building a website to take the experience of designing and creating your own jewelry/gifts online!
                        We started this project for nwHacks 2025. Here is the <a href = "https://devpost.com/software/lewswork-shop" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer">Devpost </a>and the <a href = "https://github.com/itlinde/lewsworkshop" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer"> Github </a> :) 
                        </p>

                        <p className = "mb-2">
                        In the future we are hoping to implement online transactions using Stripe, improve the functionality, and potentially add a collaboration function! We are fully intending to participate in UBC's 
                        March 2025 Makers Market with tablets available for customers to design digitally or in person. My role in this project is similar to a product manager! Though, I offer to help
                        with the front-end, my friends  benefit more from this experience than me as I am not looking to break into the software sector. There is still a lot to learn for myself here as well, including branding and business analytics among others.
                        When fully launched, lewsworkshop will provide me with a larger perspective to engineer with practicality and marketability in mind :) 

                        </p>

                        <p>
                        If you are interested, please feel free to check out <a href = "https://www.lewswork.shop" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer"> our website! </a>
                        </p>
                    </div>

                    <div id = "keyboard" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            split keyboard pcb
                            </h1>

                            <h1 className = "text-lg italic">
                            January 2025 - Present
                            </h1>
                        </div>
                        
                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        <p className = "mb-4">
                         Also a current wip! We are also looking to finish in January 2025, at least the first prototype. we are currently designing and ordering the first pcb to test a 3x3 keyboard! 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4">
                         process
                        </h2>

                        <p className = "mb-2">
                         Working together with my friend, <a 
                         href = "https://www.linkedin.com/in/hire-fred-yang/" className = "text-[#7FA1C3] hover:italic" target="_blank" rel="noopener referrer">Fred </a> 
                         we started with initally understanding the inner workings of a keyboard. In this project my role was to design the pcb while Fred worried more about the firmware and coding aspects of the project. 
                         To begin, as usual, we looked on the internet and found a git repository that showed each step of how to build a keyboard (<a href ="https://github.com/ruiqimao/keyboard-pcb-guide" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">here</a>).
                         However, this repository didn't provide me with the proper insight into fully understand how the circuit worked. I googled some more and found <a href ="https://www.youtube.com/watch?v=8WXpGTIbxlQ&ab_channel=JoeScotto" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">this video </a>
                         which made it clear how to efficiently wire a basic keyboard. 
                        </p>

                        <p className = "mb-6">
                        Commonly, technology follows a certain logic path to complete a task. Generally it would look something like this --
                        </p>

                        <p className = "mb-1 text-sm ml-1"><b>1. detect signal (something changes!)</b> -- sometimes this requires knowing how much something has changed or in what way</p>
                        <p className = "mb-6 text-sm ml-1"><b>2. signal changes something (we change something because of a change in the environment)</b> -- cause and effect! we want to achieve something based off of the fact that something changed</p>

                        <p className = "mb-2">
                        For a keyboard to work you need to be able to detect which and when a key is pressed, here we are not really bothered with the question of how much something has changed. 
                        In this case, our signal would be an analog reading of the voltage at a particular point in the circuit. Here, we are looking for HIGH or LOW. Essentially if the switch is on or off. 
                        Typically, this would require a connection directly from the circuit to a pin on a microcontroller -- one for each input signal (in this case, number of keys). 
                        However, most keyboards have around 100 keys and it would be ridiculous to have a microcontroller with 100 input pins on a small device like this. 
                        </p>

                        <p>
                         Instead, we can use diodes! Simply put, a diode only allows current to flow in one direction. In practice, that means there will only be current in the branch of the circuit containing the diode under certain conditions (the diode is forward biased).
                         With this knowledge, we are able to organize the keyboard like a grid. So that when a key is pressed, we are able to get the "coordinates" of the key using like 20 pins on the microcontroller. The signal would be returning a certain "row" and "column" to identify 
                         the pressed key rather than an individual signal for each key. 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         outcome
                        </h2>

                        <p>
                            tbd! 
                        </p>
                    </div>
                    
                    <div id = "pid" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            pid line-following robot
                            </h1>

                            <h1 className = "text-lg italic">
                            October 2024 - January 2025
                            </h1>
                        </div>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        <p className = "mb-2">
                         As a part of my IGEN 230 class, we had a semester to build a line-following robot to complete a series of three courses (see images below). We were provided with both an Arduino UNO and ESP-32 and a basic
                         robot kit (including a chassis, two DC motors, IR sensors, and other required materials). My team was able to complete all three courses. As a part of this project, 
                         I was involved in designing and soldering the pcb, managing the power supply, and writing the pid code in <b>Arduino/C++ </b>. 
                        </p>

                        <p className = "mb-2">
                         To begin, we made a couple executive decisions to determine the difficulty of the robot we wanted to build. These decisions were to use the ESP-32 rather than the Arduino Uno and to 
                         attempt to achieve PID control. 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         process
                        </h2>

                        <h3 className = "italic text-lg mb-2">
                         circuitry and electronics
                        </h3>

                        <p className = "mb-2">
                         In class, we started with setting up a simple circuit connecting only one IR sensor to the Arduino UNO and testing to the readings fluctated depending on the colour of a surface. 
                         From here we propogated the circuit four more times and organized it neatly on a board. Initially, we used a potentiometer to be able to adjust the reading values of the sensors. 
                         However, eventually we found that the readings were more stable if the potentiometer was shorted and the sensors directly connected. The resulting board had a schematic like below. 
                        </p>

                        <p className = "mb-2">
                         In order to be able to see and use the values observed by from the sensors, we needed to connect it to the ESP-32. Each sensor requires one analog input connection.
                         The H-bridge used to control the motors also required six pins on the ESP-32, four of which are digital and two as analog outputs (to control the speed of the motors). 
                         The general pin-out of the ESP-32 is illustrated in the image below. 
                        </p>

                        <h3 className = "italic text-lg mb-2">
                         sensor bracket and organization
                        </h3>

                        <p>
                         In order to attach the sensors to the chassis, our team designed a sensor bracket in <b>OnShape </b> capable of screwing into the premade holes in the chassis and holding 
                         five IR sensors in a row facing the ground and the ultrasonic sensor in the front. This design was not interated too much as many of the issues could easily be fixed with post-processing 
                         after printing. 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         outcome
                        </h2>

                        <p>
                         Overall, our project suceeded in completing three courses by overcoming 90 degree turns, larger than 90 degree turns, gaps and intersections in the course lines (demonstrated in the videos below). 
                         I believe that further iterations on the sensor bracket would improve the reliability of our robot. If the sensors were space precisely such that if the central sensor is aligned with the track, 
                         the two adjacent sensors would be placed just when the track width ends on either side. This way, any deviation from the track would quickly be detected, allowing for our robot to adjust quickly
                         and run more smoothly. In  addition, this would remove the issue when the line is occasionally not detected by any sensor when it is turning. 
                        </p>

                    </div>

                    <div id = "capcap" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            open cv study-aid 
                            </h1>

                            <h1 className = "text-lg italic">
                            November 2024
                            </h1>
                        </div>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        <p className = "mb-2">
                          <b>2024 Hackcamp Winner! </b>I attended Hackcamp and met some really cool people (<a href = "https://www.linkedin.com/in/jocelynkwa/" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">Jocelyn</a>,
                          <a href = "https://www.linkedin.com/in/isabellalinde/" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer"> Isabella</a>, and <a href = "https://www.linkedin.com/in/brandonyeung-/" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">Brandon</a>)
                         and together we built <a href = "https://devpost.com/software/capcap-8xjrw7" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer" >CapCap</a> (links to Devpost). 
                          A website capable of tracking how much "studying time" a user spent focusing on their work. We build this using computer vision and facial recognition 
                          to track when and where a user would look away from their screen. 
                  
                        </p>

                        <p>
                         My role in this project mainly consisted of product design and completing the deliverable requirements! Our <a href = "https://www.figma.com/proto/Qjth3JkTRqzRdqfX2V6Wyp/capcap?node-id=31-441&node-type=frame&t=4zjNgE69rvPXJDlS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A441" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">Figma</a> and <a href = "https://github.com/byeung05/CapCap" className = "text-[#7FA1C3] hover:italic" target = "_blank" rel="noopener referrer">Git </a>are linked here :) 
                        </p>
                    </div>
                    
                    <div id = "claw" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            arduino aluminum claw 
                            </h1>

                            <h1 className = "text-lg italic">
                            January 2024 - February 2024
                            </h1>
                        </div>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        <p className = "mb-2">
                         This was one of my term 2 projects for APSC 100/101. 
                        </p>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         process
                        </h2>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         outcome
                        </h2>

                        </div>
                                <div id = "chair" className = "mb-20">

                        <div className = "flex flex-row sticky top-0 bg-white pb-1 w-full whitespace-nowrap">
                            <h1 className = "font-[family-name:var(--font-rozha-one)] text-5xl w-3/4">
                            cardboard chair
                            </h1>

                            <h1 className = "text-lg italic">
                            September 2023 - October 2023
                            </h1>
                        </div>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-10">
                         project overview
                        </h2>

                        

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         process
                        </h2>

                        <h2 className = "font-[family-name:var(--font-rozha-one)] text-2xl mb-4 mt-4">
                         outcome
                        </h2>
                    </div>
                </section>
                </div>
            </div>
    );
}