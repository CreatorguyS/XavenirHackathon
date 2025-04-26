function CreateDonation() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Create Donation</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Food Type" className="border p-2 w-full" />
          <input type="number" placeholder="Quantity (in Kg)" className="border p-2 w-full" />
          <textarea placeholder="Pickup Address" className="border p-2 w-full"></textarea>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
        </form>
      </div>
    );
  }
  
  export default CreateDonation;
  