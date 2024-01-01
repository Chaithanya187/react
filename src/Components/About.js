import profile from '../Images/profile.jpg'
const About = () => {
  return (

    <div className=' flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border w-fit max-w-xs'>
        <p className="font-medium text-xl w-full text-center py-2">About Me</p>
        <img src={profile} alt="profile_pics" height={100} width={100} className=' rounded-full w-[150px] h-[150px] border-none align-middle'/>
      <div className='bg-slate-900 text-white rounded-sm w-fit'>
        <div className=' max-w-xs overflow-hidden p-4'>
        <p className='pb-4 text-lg font-normal text-slate-300 text-center max-w-xs '>Python| Django| Javascript| ReactJs|Tailwand CSS| Python Full Stack Developer</p>
        </div>
        <div className='text-[2em] text-center w-full flex items-center justify-center mt-2'>
          <a href='https://github.com/Chaithanya187' target='_blank' className='mb-2 pr-4 hover:scale-105'><i class="bg-[#333] icon--i"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="m-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></i></a>
          <a href='https://www.linkedin.com/in/chaithanya-reddy-6a06301b9/' traget='_blank' className='mb-2 pr-4 hover:scale-105'><i className="bg-[#0e76a8] icon--i"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="m-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></i></a>
          <a href='mailto:chaithanya2126@gmail.com' target='_blank' ><i className="bg-[#ea4335] icon--i"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="m-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg></i></a>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default About;
