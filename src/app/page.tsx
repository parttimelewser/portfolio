import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex w-full mt-40 ml-10 flex-wrap min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-quattrocento)]">
        <section className="flex-col justify-items-center w-1/3">

          <span className="inline-flex overflow-hidden whitespace-nowrap animate-type text-5xl mb-8 font-[family-name:var(--font-rozha-one)]">
              Hi, I'm Olivia !
          </span>
          <span
            className="box-border inline-block w-0.5 h-8 bg-[#EDEDED] animate-cursor will-change-transform "
          ></span>

          <Image
            className="rounded-2xl shadow-lg"
            src="/olivia.JPG"
            alt="oliviasface"
            width={280}
            height={100}
            priority
          />

          <div className="flex gap-4 items-center flex-col sm:flex-row sm:p-8 mt-6">
            <a
              className="rounded-full border border-solid border-white/[.5] transition-colors flex items-center justify-center hover:bg-[#CADABF] hover:text-[#B0C4A1] hover:border-[#B0C4A1]/[.7] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://www.linkedin.com/in/olivia-lew "
              target="_blank"
              rel="noopener referrer"
            >
              my linkedin
            </a>
            <a
              className="rounded-full border border-solid border-white/[.5] transition-colors flex items-center justify-center hover:bg-[#CADABF] hover:text-[#B0C4A1] hover:border-[#B0C4A1]/[.7] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href= "mailto: olivia.lew.515@gmail.com " 
              target="_blank"
              rel="noopener referrer"
            >
              email me!
            </a>
          </div>
        </section>

        <section className="flex-col w-1/2">
          <div  className="flex gap-4 items-center flex-row sm:flex-row sm:p-4">
            <nav
              className="text-2xl text-center font-[family-name:var(--font-rozha-one)] "
            >
              <a  className = "hover:text-[#B0C4A1] sm: p-8"
                  href = "#projects">
                  projects
              </a>

              <a className = " hover:text-[#B0C4A1] sm: p-8"
                href = "#resume"
                >
                  
                resume
              </a>

              <Link className = " hover:text-[#B0C4A1] sm: p-8"
                href = "/words">
                documentation
              </Link>
            </nav>
          </div>
          
          <div className = "sm:p-8 mt-10">
            <p>
              I'm currently in my second year of <a href="https://www.integratedengineers.ca/" className = "text-[#CADABF] hover:text-[#6B819F]">Integrated Engineering</a> at UBC, hoping to specialize in
              electromechanical applications and assemblies! Right now, I am obsessing over starting the new year by pursuing my interests in selling custom jewelry <a href="https://www.instagram.com/lewsworkshop/" className = "text-[#CADABF] hover:text-[#6B819F]">/@lewsworkshop/</a>, researching
              micro-systems and sensors, all while making worthwhile memories with my friends. Some of my projects include a PID line-following robot, a split keyboard PCB and a motor controller using Rust! My top 2025 goals are to dive deeper into my career interests and to be more present with those around me :)
            </p>
          </div>
        </section>

        <div id = "projects" className = "flex flex-col w-full mt-20">
          
            <div  className="sticky top-0 flex items-center flex-row sm:flex-row bg-[#7FA1C3] sm: p-2 z-10">
              <h1
                className = "w-1/3 text-center text-5xl font-[family-name:var(--font-rozha-one)]">
                  / projects /
              </h1>
              
              <nav
                className=" w-1/2 text-2xl text-center gap-4 font-[family-name:var(--font-rozha-one)]"
              >
                <a  className = "hover:text-[#B0C4A1] sm: p-10"
                    href = "">
                    home
                </a>

                <a className = " hover:text-[#B0C4A1] sm: p-10"
                  href = "#resume"
                  >
                    
                  resume
                </a>

                <Link className = " hover:text-[#B0C4A1] sm: p-8"
                href = "/words">
                documentation
              </Link>
              </nav>
            </div>
            
            <section className = "flex flex-col justify-items-center gap-8 mt-10 mb-10">
              <section className = " flex sm:flex-row justify-center items-center w-full mt-20 gap-40">
                <Link className = " relative group flex-col justify-items-center" href = "/words#motorcontrol">

                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/placeholder.jpg"
                  alt="rust image"
                  width={280}
                  height={100}
                  priority
                  />

                  <div className = "absolute inset-0 flex items-center justify-center sm:p-2 bg-[#6B819F] rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-200">
                      <p>
                        Taking the opportunity to learn Rust and introduce myself to embedded software by building a simple DC motor controller.
                      </p> 
                  </div>
                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    Rust Motor Controller
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    Rust
                  </h1>
                </Link> 

                <Link className = " relative group flex-col justify-items-center" href = "/words#keyboard">
                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/placeholder.jpg"
                  alt="keyboard!"
                  width={280}
                  height={100}
                  priority
                  />

                  <div className = "absolute inset-0 flex items-center justify-center bg-[#6B819F] sm:p-2 rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-200">
                      <p> 
                        Working with my friend, Fred to working towards building a split keyboard capable of accomodating user's non-traditional typing habits! 
                      </p>
                  </div>

                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    Split Keyboard PCB
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    KiCad / PCB Design
                  </h1>
                </Link> 

                <Link className = " relative group flex-col justify-items-center" href = "/words#pid">
                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/placeholder.jpg"
                  alt="pid"
                  width={280}
                  height={100}
                  priority
                  />

                  <div className = "absolute inset-0 flex items-center justify-center bg-[#6B819F] sm:p-2 rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-200">
                      <p>
                        Utilizing ESP-32, IR and ultrasonic sensors to smoothly follow a defined track while overcoming gaps, sharp turns and avoiding obstacles.
                      </p> 
                  </div>

                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    PID Line-Following Robot
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    Arduino / C++ / OnShape / Soldering
                  </h1>
                </Link> 

              </section>

              <section className = " flex sm:flex-row justify-center items-center w-full mt-20 gap-40">

                <Link className = " relative group flex-col justify-items-center" href = "/words">
                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/capcap.jpg"
                  alt="capcap"
                  width={280}
                  height={100}
                  priority
                  />

                  <div className = "absolute inset-0 items-center justify-center bg-[#6B819F] rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-200">
                    <div className = "flex-col items-justify-center items-center mt-20">
                        <p>
                            Hackcamp 2024 Winner!
                        </p>
                        <p className = "mt-8 sm:p-2">
                          Worked with some really cool people to design and build a facial recognition program quantifying a user's ability to focus when studying!
                        </p>
                      </div>
                  </div>

                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    Open CV Study-Aid
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    Figma / HTML / CSS
                  </h1>
                </Link> 

                <Link className = "relative group flex-col justify-items-center" href = "/words">
                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/claw.jpg"
                  alt="claw"
                  width={280}
                  height={100}
                  priority
                  />
                  
                  <div className = "absolute inset-0 flex items-center justify-center bg-[#6B819F] rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-20 sm:p-2">
                      Worked within a team to build a automated claw capable of picking up items of various shapes and sizes.  
                  </div>

                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    Arduino Aluminum Claw
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    Servo Motors / Machining
                  </h1>
                </Link> 

                <Link className = "relative group flex-col justify-items-center" href = "/words">
                  <Image
                  className="rounded-2xl shadow-lg"
                  src="/chair.jpg"
                  alt="chair"
                  width={280}
                  height={100}
                  priority
                  />
                  
                  <div className = "absolute inset-0 flex items-center justify-center bg-[#6B819F] rounded-2xl text-white text-center opacity-0 group-hover:opacity-100 transition duration-200">
                      Designed a portable cardboard chair capable of being withstand a load of 100lbs and be assembled within 30s. 
                  </div>

                  <h1 className = "mt-4 font-[family-name:var(--font-rozha-one)] text-xl ">
                    Cardboard Chair
                  </h1>
                  <h1 className = "font-[family-name:var(--font-quattrocento)] text-md italic ">
                    Design Process / Technical Teamwork
                  </h1>
                </Link> 
                </section>
            </section>
        </div>

        <div
          id = "resume" className = " w-full flex-col justify-items-center sm:p-8 mt-20">
          <h1
            className = "text-5xl font-[family-name:var(--font-rozha-one)]">
              / resume /
          </h1>
          <div  className="flex gap-4 items-center flex-row sm:flex-row">
            <nav
              className="text-2xl text-center sm:p-8 font-[family-name:var(--font-rozha-one)] "
            >
              <a  className = "hover:text-[#B0C4A1] sm: p-8"
                  href = "">
                  home
              </a>

              <a className = " hover:text-[#B0C4A1] sm: p-8"
                href = "#projects"
                >
                  
                projects
              </a>

              <Link className = " hover:text-[#B0C4A1] sm: p-8"
                href = "/words">
                documentation
              </Link>
            </nav>
          </div>
          <iframe
            src = "/resume.pdf"
            className = "w-full h-screen"
          >
          </iframe>
        </div>

      </div>


  );
}
