import Image from "next/image";

const footerColumns = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

// Inline black SVGs for social icons
const socialIcons = [
  {
    label: "Twitter",
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='black'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149 4.916 4.916 0 003.195 9.72a4.9 4.9 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.593 3.417A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.212c9.056 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z' />
      </svg>
    ),
  },
  {
    label: "Facebook",
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='black'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.098 2.794.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z' />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='black'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.918 4.918 0 011.768 1.023 4.918 4.918 0 011.023 1.768c.163.461.347 1.261.403 2.431.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.431a4.918 4.918 0 01-1.023 1.768 4.918 4.918 0 01-1.768 1.023c-.461.163-1.261.347-2.431.403-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.431-.403a4.918 4.918 0 01-1.768-1.023 4.918 4.918 0 01-1.023-1.768c-.163-.461-.347-1.261-.403-2.431C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.431a4.918 4.918 0 011.023-1.768 4.918 4.918 0 011.768-1.023c.461-.163 1.261-.347 2.431-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072c-1.28.058-2.153.25-2.908.53a6.919 6.919 0 00-2.514 1.646A6.919 6.919 0 00.072 4.762c-.28.755-.472 1.628-.53 2.908C-.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.28.25 2.153.53 2.908a6.919 6.919 0 001.646 2.514 6.919 6.919 0 002.514 1.646c.755.28 1.628.472 2.908.53C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.28-.058 2.153-.25 2.908-.53a6.919 6.919 0 002.514-1.646 6.919 6.919 0 001.646-2.514c.28-.755.472-1.628.53-2.908.058-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.28-.25-2.153-.53-2.908a6.919 6.919 0 00-1.646-2.514 6.919 6.919 0 00-2.514-1.646c-.755-.28-1.628-.472-2.908-.53C15.668.013 15.259 0 12 0z' />
        <path d='M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z' />
      </svg>
    ),
  },
  {
    label: "GitHub",
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='black'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.492 11.492 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className='w-full flex flex-col'>
      <div className='w-full bg-white border-t border-solid border-[#d5d5d5] py-10 px-6 sm:px-10 lg:px-[104px]'>
        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start'>
          {/* Left */}
          <div className='flex flex-col gap-6 w-full lg:max-w-[360px]'>
            <Image
              alt='Google logo'
              src='/Google-Logo.png'
              width={100}
              height={400}
              className='lg:w-31.25 w-22.5 h-auto'
            />

            <p className='text-sm text-gray-500 leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis.
            </p>

            {/* Social Icons */}
            <div className='flex gap-4'>
              {socialIcons.map(({ label, svg }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={label}
                  className='hover:opacity-70 transition'>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-16'>
            {footerColumns.map((column) => (
              <div key={column.title} className='flex flex-col gap-4'>
                <h3 className='font-bold text-gray-900 text-sm sm:text-base leading-6'>
                  {column.title}
                </h3>
                <ul className='flex flex-col gap-2'>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href='#'
                        className='text-gray-600 text-sm hover:text-black hover:underline transition'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='w-full py-4 flex items-center justify-center bg-[#230b41] px-4'>
        <p className='text-white text-xs sm:text-sm text-center'>
          © Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
}
