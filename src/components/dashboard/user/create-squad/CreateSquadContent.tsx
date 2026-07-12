"use client";

import { uploadImageToImageBB } from "@/utils/imageUpload";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import MediaUploader from "./MediaUploader";
import TechAndComms from "./TechAndComms";
import CreateSquadForm from "./createSquadForm/CreateSquadForm";
import { useRouter } from "next/navigation";

const CreateSquadContent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [tags, setTags] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  const onSubmit = async (data: any) => {
    if (!selectedFile) {
      toast.error("Please provide a cover image.");
      return;
    }

    try {
      setIsSubmitting(true);
      toast.loading("Launching Squad...", { id: "squad-upload" });
    
      // Pass Img to imgBB
      const coverImageUrl = await uploadImageToImageBB(selectedFile);
      
      const squadData = {
        ...data,
        techStack: tags,
        coverImage: coverImageUrl
      };

      console.log("🚀 Final Unified Squad Structured Data Object Matrix:", squadData);
      
      toast.success("Squad launched successfully!", { id: "squad-upload" });
      router.push('/dashboard/user/squads');
      reset();
      setTags([]);
      setSelectedFile(null);
    } catch (error: any) {
      toast.error(error?.message || "Squad launch failed.", { id: "squad-upload" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Heading Content  */}
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Launch a New Squad</h2>
        <p className="text-xs text-gray-500 mt-1">Define your project scope and recruit elite team members.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <CreateSquadForm register={register} errors={errors} />
          <MediaUploader setSelectedFile={setSelectedFile} />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <TechAndComms register={register} errors={errors} tags={tags} setTags={setTags} />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 disabled:text-gray-500 font-semibold text-white px-4 py-3 rounded-xl text-sm tracking-wide shadow-lg transition-all cursor-pointer text-center"
          >
            {isSubmitting ? "Launching Squad..." : "Launch Squad"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSquadContent;

