function RegisterDistributor() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Register as Distributor</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="border p-2 w-full" />
          <input type="email" placeholder="Email" className="border p-2 w-full" />
          <input type="password" placeholder="Password" className="border p-2 w-full" />
          <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
    );
  }
  
  export default RegisterDistributor;
  