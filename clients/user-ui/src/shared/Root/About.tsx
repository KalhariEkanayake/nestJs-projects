
const About = () => {
  return (
    <div>
    
      <div className="w-full h-auto py-20 flex flex-col items-center bg-gray-100 dark:bg-gray-900">
        <div className="w-[80%] text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
            At <span className="font-semibold text-purple-600">Foodie Delight</span>, we are dedicated to delivering 
            healthy and delicious meals straight to your door. Our journey started with a simple idea: to make 
            wholesome eating accessible to everyone. We source fresh ingredients, craft delightful recipes, and 
            ensure every meal is prepared with love and care.
          </p>
          <br />
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-8">
            Our team of experienced chefs and nutritionists works tirelessly to bring you meals that 
            satisfy your taste buds while nourishing your body. With a range of options to suit every 
            dietary preference, we are committed to helping you live a healthier and happier life.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src="http://localhost:3000/images/About2.avif"
            alt="About Us Image"
            className="rounded-lg shadow-lg w-[200%] md:w-[190%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
