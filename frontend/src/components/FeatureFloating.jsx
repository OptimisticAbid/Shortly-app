export default function FeatureFloating() {
  return (
    <div className="relative -mt-32 z-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-center">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-xl shadow-gray-300/40 w-full md:w-1/3 -rotate-2 border">
          <h3 className="font-semibold text-lg mb-2">Seamless integration</h3>
          <p className="text-gray-600">
            Easily integrate with popular platforms and tools.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-xl shadow-gray-300/40 w-full md:w-1/3 rotate-1 border">
          <h3 className="font-semibold text-lg mb-2">Customizable links</h3>
          <p className="text-gray-600">
            Create branded short links that reflect your identity.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-xl shadow-blue-300/40 w-full md:w-1/3 -rotate-3 border border-blue-200">
          <h3 className="font-semibold text-lg mb-2">Analytics that matter</h3>
          <p className="text-gray-700">
            Track clicks, views, and conversions with real-time data.
          </p>
        </div>

      </div>
    </div>
  );
}