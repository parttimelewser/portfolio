import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col w-full h-full font-[family-name:var(--font-quattrocento)]">
        
        <div className = "grid grid-cols-8 h-10 sticky z-10 top-0 border-b items-center font-[family-name:var(--font-rozha-one)] bg-[#1A2C58]">

          <a className = "text-lg hover:opacity-50 whitespace-nowrap ml-2" href = "#">
            Olivia Lew
          </a>
          <nav className = "col-start-9">

            <a className = "hover:opacity-50 p-4" href = "#aboutme">
              about me
            </a>

            <a className = "hover:opacity-50 p-4" href = "#projects">
              projects
            </a>

            <Link className = "hover:opacity-50 p-4" href = "/words">
              documentation
            </Link>
          </nav>
         </div>

        <section className="flex-col justify-items-center mt-[36vh]">

          <span className="inline-flex overflow-hidden whitespace-nowrap animate-type text-8xl mb-[12vh] font-[family-name:var(--font-rozha-one)]">
              Hi, I'm Olivia !
          </span>
          <span
            className="box-border inline-block w-0.5 h-16 bg-[#EDEDED] animate-cursor will-change-transform "
          ></span>

          <div className="flex items-center flex-row gap-8 mb-[15vh]">
            <a
              className="hover:opacity-50"
              href="https://www.linkedin.com/in/olivia-lew "
              target="_blank"
              rel="noopener referrer"
            >
              <Image
                src = "/linkedin.png"
                alt = "linkedin"
                width = {60}
                height = {60}
                priority
              />
            </a>
            <a
              className="hover:opacity-50"
              href= "mailto: olivia.lew.515@gmail.com " 
              target="_blank"
              rel="noopener referrer"
            >
              <Image
                src = "/email.png"
                alt = "email me"
                width = {60}
                height = {60}
                priority
              />
            </a>
          </div>

          <h1 className = "p-4">
            scroll for more!
          </h1>

          <a className = "hover:opacity-50" href = "#aboutme">
            <Image
              src = "/arrow.png"
              alt = "arrow"
              width = {10}
              height = {60}
              priority
            />
          </a>
        </section>

        <div className="grid grid-cols-4 w-full mt-[20vh]">
          <div className = "flex flex-col col-start-2 items-justify-center" id = "aboutme">
            <h1 className = "relative text-7xl font-[family-name:var(--font-rozha-one)] mb-16 whitespace-nowrap">
              / about me /
            </h1>

            <div className = "relative flex justify-center col-start-2">

              <p className = "p-6 bg-[#FFFFFF] rounded-xl text-[#1A2C58] text-md absolute top-14 w-full">
                I'm currently in my second year of <a href="https://www.integratedengineers.ca/" className = "text-[#6B819F] hover:italic font-[family-name:var(--font-rozha-one)]" target="_blank" rel="noopener referrer">Integrated Engineering</a> at UBC, hoping to specialize in
                MEMs and similar nanotechnologies! Right now, I am pursuing my interests in selling custom jewelry <a href="https://www.instagram.com/lewsworkshop/" className = "text-[#6B819F] hover:italic font-[family-name:var(--font-rozha-one)]" target="_blank" rel="noopener referrer">/@lewsworkshop/</a> and researching
                alongside Prof. Edmond Cretu in the realm of signal processing for wearable technology in the emergency room. Some of my projects include a PID line-following robot and a split keyboard PCB! My top 2025 goals are to dive deeper into my career interests and to be more present with those around me :)
              </p>
            
                <Image
                  src = "/tape.png"
                  alt = "tape"
                  width = {270}
                  height = {75}
                  priority
                  className = "absolute top-0"
                />
            </div>
          </div>

          <div className = "w-full h-auto relative">
            <Image
              src = "/olivia.png"
              alt = "liv"
              width = {400}
              height = {500}
              priority
              className = "col-start-3 ml-[10vw]"
            />
          </div>
        </div>

        <div id = "projects" className = "mt-[25vh]">

          <div className = "w-full justify-items-center">
            <h1 className = "text-7xl font-[family-name:var(--font-rozha-one)] mb-[8vh] whitespace-nowrap">
              / projects /
            </h1>
            <p>
              !! hover for a description // click for more info !!
            </p>
          </div>

            <section className = "flex flex-col justify-items-center gap-8 mt-10 mb-10">
              <section className = " flex sm:flex-row justify-center items-center w-full mt-20 gap-40">

                <div className = "flex flex-col gap-2 place-items-center">
                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-2xl ">
                    lewswork.shop
                  </h1>
                  <Link className = "relative group" href = "/words#lewsworkshop">
                    <Image
                    className="rounded-3xl"
                    src="/lewsworkshop.jpg"
                   alt="lewsworkshop"
                   width={280}
                   height={100}
                   priority
                   />
                   <p className = "absolute inset-0 flex items-center justify-center sm:p-2 bg-[#FFFFFF] rounded-2xl text-[#6B819F] text-center opacity-0 group-hover:opacity-100 transition duration-200">
                    Submitted for nwHacks 2025! Starting a small jewelry business that gives customers the opportunity to design and customize their own keychains, earrings and bracelets. (Hopefully at UBC's Makers Market in March 2025!)
                   </p> 
                  </Link>

                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-lg italic ">
                    Tailwind / Next.js / mongodb
                  </h1>
                </div>

                <div className = "flex flex-col gap-2 place-items-center">
                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-2xl ">
                    Split Keyboard PCB
                  </h1>
                  <Link className = "relative group" href = "/words#keyboard">
                    <Image
                    className="rounded-3xl"
                    src="/placeholder.png"
                   alt="keyboard"
                   width={280}
                   height={100}
                   priority
                   />
                   <p className = "absolute inset-0 flex items-center justify-center sm:p-2 bg-[#FFFFFF] rounded-2xl text-[#6B819F] text-center opacity-0 group-hover:opacity-100 transition duration-200">
                   Working with my friend, Fred to working towards building a split keyboard capable of accomodating user's non-traditional typing habits! 
                   </p> 
                  </Link>

                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-lg italic ">
                    KiCad / PCB Design
                  </h1>
                </div>

                <div className = "flex flex-col gap-2 place-items-center">
                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-2xl ">
                    PID Line-Following Robot
                  </h1>
                  <Link className = "relative group" href = "/words#pid">
                    <Image
                    className="rounded-3xl"
                    src="/placeholder.png"
                   alt="pid"
                   width={280}
                   height={100}
                   priority
                   />
                   <p className = "absolute inset-0 flex items-center justify-center sm:p-2 bg-[#FFFFFF] rounded-2xl text-[#6B819F] text-center opacity-0 group-hover:opacity-100 transition duration-200">
                   Utilizing ESP-32, IR and ultrasonic sensors to smoothly follow a defined track while overcoming gaps, sharp turns and intersections!
                   </p> 
                  </Link>

                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-lg italic ">
                    C++ / OnShape / Soldering
                  </h1>
                </div>

              </section>

              <section className = " flex sm:flex-row justify-center items-center w-full mt-20 gap-40">


              <div className = "flex flex-col gap-2 place-items-center">
                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-2xl ">
                    Open CV Study-Aid
                  </h1>
                  <Link className = "relative group" href = "/words#capcap">
                    <Image
                    className="rounded-3xl"
                    src="/capcap.jpg"
                   alt="capcap"
                   width={280}
                   height={100}
                   priority
                   />
                   <div className = "absolute inset-0 flex flex-col items-center justify-center sm:p-2 bg-[#FFFFFF] rounded-2xl text-[#6B819F] text-center opacity-0 group-hover:opacity-100 transition duration-200 ">
                    <p className = "font-bold mb-2">
                      Hackcamp 2024 Winner!
                    </p>
                    <p>
                    Worked with some really cool people to design and build a facial recognition program quantifying a user's ability to focus when studying!
                    </p>
                   </div>
                  </Link>

                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-lg italic ">
                    C++ / OnShape / Soldering
                  </h1>
                </div>

                </section>
            </section>
        </div>

      </div>


  );
}
