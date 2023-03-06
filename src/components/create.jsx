import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const service = { name, description, price, image_url };

    fetch("https://house-service-backend-production.up.railway.app/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => {
        navigate("/admin");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div id="add-service">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Add New Service</h2>
              </div>
              <form
                action="POST"
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter Service name"
                        required
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="number"
                        name="pri"
                        className="form-control"
                        placeholder="Enter Price"
                        required
                        value={price}
                        onChange={(ev) => setPrice(ev.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <input
                      type="url"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Image-url"
                      required
                      value={image_url}
                      onChange={(ev) => setImageUrl(ev.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Submit
                </button>
              </form>
              <a href="/admin" className="btn btn-success">
                Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2023 Nice Touch. All Rights Reserved!</p>
        </div>
      </div>
    </div>
  );
};

export default Create;
    