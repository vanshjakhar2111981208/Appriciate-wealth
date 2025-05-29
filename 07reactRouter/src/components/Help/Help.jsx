export default function Help() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Welcome to the Help Page! 


                        </h2>
                        <p className="mt-6 text-gray-600">
                            We're here to assist you with any questions or issues you may have.
                        </p>
                        <p className="mt-4 text-gray-600">
                             💬 Still Need Help?
If you have further questions or need assistance, feel free to reach out to us:

📧 Email: support@yourapp.com
📞 Phone: +1 (123) 456-7890
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}