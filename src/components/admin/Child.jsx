import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Child = () => {
  const [servdata, servdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/admin/dashboard/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/update/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(
        "https://house-service-backend-production.up.railway.app/services/" +
          id,
        {
          method: "DELETE",
        }
      )
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("https://house-service-backend-production.up.railway.app/services")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        servdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div id="services" className="text-center text-white ">
      <div id="dashboard" className="container">
        <div className="card">
          <div className="card-title">
            <h2>Services Listing</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="/create" className="btn btn-success">
                Add New (+)
              </Link>
            </div>
            <table className="table table-bordered table-responsive">
              <thead className="text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image-url</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {servdata &&
                  servdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td className="w-100">{item.description}</td>
                      <td>{item.image_url}</td>
                      <td>{item.price}</td>
                      <td>
                        <a
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                          className="btn btn-success"
                        >
                          Edit
                        </a>
                        <a
                          onClick={() => {
                            Removefunction(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Remove
                        </a>
                        <a
                          onClick={() => {
                            LoadDetail(item.id);
                          }}
                          className="btn btn-primary"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
