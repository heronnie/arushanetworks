import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className=" text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-yellow-400">Arusha Networks</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Connecting homes and businesses with reliable, secure, and affordable network solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold">Who We Are</h2>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Arusha Networks is a trusted provider of professional security and
              network services. We serve homes, offices, and businesses across
              Arusha with reliable connectivity, surveillance solutions, and
              expert installation.
            </p>
            <p className="mt-4 text-gray-200 leading-relaxed">
              With a dedicated team of certified technicians, we ensure that your
              systems are secure, efficient, and always running smoothly. Your
              safety and connectivity remain our top priority.
            </p>
          </div>
          <div>
            <Image
              src="/network.webp"
              alt="Network Setup"
              className="rounded-2xl shadow-lg"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To provide reliable and secure network solutions that empower our
              clients with seamless connectivity and peace of mind.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">Our Vision</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To become the leading network service provider in Tanzania,
              recognized for our quality, innovation, and customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-blue-100">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold text-yellow-500">Integrity</h4>
              <p className="mt-2 text-gray-600">
                We are committed to honesty and transparency in every project we handle.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold text-yellow-500">Excellence</h4>
              <p className="mt-2 text-gray-600">
                Delivering cutting-edge technology and expert services that exceed expectations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h4 className="text-lg font-semibold text-yellow-500">Support</h4>
              <p className="mt-2 text-gray-600">
                Providing reliable assistance and maintenance to ensure long-term satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
