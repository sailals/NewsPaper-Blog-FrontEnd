import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "./../slices/api";
import { toast } from "react-toastify";

function Write() {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [productImg, setProductImg] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };
  const username = auth.name;

  const blog = {
    username,
    title,
    desc,
    cat,
    image: productImg,
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${url}/post`, blog);
    toast.success("Blog Successfully Posted", {
      position: "bottom-left",
    });
    navigate("/");
  };

  return (
    <div className="write-container">
      <div className="preview-image">
        {productImg ? (
          <img src={productImg} alt="" />
        ) : (
          <i class="bx bxs-image bx-tada"></i>
        )}
      </div>
      <div className="addImage">
        <span>Add Image</span>
        <label htmlFor="file">
          <i class="bx bx-image-add"></i>
        </label>

        <input
          onChange={handleImageUpload}
          type="file"
          name="file"
          id="file"
          hidden
        />
      </div>
      <div className="write-form">
        <div className="title">
          <label htmlFor="">Add Blog Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name=""
            id=""
            value={title}
          />
        </div>
        <div className="add-category">
          <label htmlFor="">Select Category</label>
          <select
            onChange={(e) => setCat(e.target.value)}
            name=""
            id=""
            value={cat}
          >
            <option value="HBO">HBO</option>
            <option value="Disney">Disney</option>
            <option value="Games">Games</option>
            <option value="Netflix">Netflix</option>
            <option value="Songs">Songs</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
        <div className="description">
          <label htmlFor="">Add Description</label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            value={desc}
          ></textarea>
        </div>
        <button onClick={handelSubmit} className="btn ">
          Add Blog
        </button>
      </div>
    </div>
  );
}

export default Write;
