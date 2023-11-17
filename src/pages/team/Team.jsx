import React from "react";
import doc1 from "../../assets/doc1.jpg";
import doc2 from "../../assets/doc2.jpeg";
import doc3 from "../../assets/doc3.jpeg";
import doc4 from "../../assets/doc4.jpeg";
import doc5 from "../../assets/doc5.jpeg";
import doc6 from "../../assets/doc6.jpeg";

export default function Team() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Meet our Doctors
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet our Team of Specialised Doctors Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc1}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Holden Caulfield
                </h2>
                <p class="text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc2}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Henry Letham
                </h2>
                <p class="text-gray-500">Dermatologist</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc3}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Oskar Blinde
                </h2>
                <p class="text-gray-500">Neurologist</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc4}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                <p class="text-gray-500">Pediatrician</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc5}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Martin Eden
                </h2>
                <p class="text-gray-500">Pediatrician</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc6}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Boris Kitua
                </h2>
                <p class="text-gray-500">General Practioner</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc1}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Atticus Finch
                </h2>
                <p class="text-gray-500">Radiologist</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc4}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
                <p class="text-gray-500">System</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={doc3}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p class="text-gray-500">Physician</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
