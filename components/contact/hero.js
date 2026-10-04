'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Smartphone, MapPin, Award, Clock, ShieldCheck } from 'lucide-react';
import * as THREE from 'three';

export default function ContactHero() {
  const canvasRef = useRef(null);

  // THREE.JS 3D Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    const updateSize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.parentElement?.clientWidth || 400;
      const height = canvasRef.current.parentElement?.clientHeight || 450;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    updateSize();

    // Adjusted lighting for Dark Mode
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const group = new THREE.Group();

    // Adjusted materials for Dark Background (White, Slate, Red)
    const matWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.5 });
    const matSlate = new THREE.MeshStandardMaterial({ color: 0x6B7C96, roughness: 0.2, metalness: 0.4 });
    const matRed   = new THREE.MeshStandardMaterial({ color: 0xDC2E3F, roughness: 0.1, metalness: 0.3 });

    const bar1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.2, 0.7), matWhite);
    const bar2 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 3.2, 0.7), matSlate);
    const bar3 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 4.2, 0.7), matRed);

    bar1.position.set(-1.0, -0.8, 0);
    bar2.position.set(0, -0.3, 0.2);
    bar3.position.set(1.0, 0.2, 0.4);

    group.add(bar1, bar2, bar3);
    scene.add(group);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateSize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      group.rotation.y += 0.005;
      group.rotation.x += (mouseY - group.rotation.x) * 0.05;
      group.rotation.y += (mouseX - group.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateSize);
      renderer.dispose();
    };
  }, []);

  return (
    // DARK GREY BACKGROUND (#1A1D29) with white text
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1A1D29] text-white px-6 pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden z-0">
      
      {/* Background Subtle Grid Pattern (White transparent) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Red ambient glow top left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#DC2E3F] rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Brand Bars & Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-end space-x-1.5 h-8">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-3.5 h-6 bg-white origin-bottom rounded-xs" />
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-3.5 h-8 bg-[#6B7C96] origin-bottom rounded-xs" />
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="w-3.5 h-10 bg-[#DC2E3F] origin-bottom rounded-xs" />
            </div>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#DC2E3F]/10 text-[#DC2E3F] border border-[#DC2E3F]/20 shadow-xs backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 mr-1.5" />
              Kashif Insari (MAAT) Qualified
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Get In Touch With ADAMSON
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Let’s Discuss Your <br />
              <span className="text-[#DC2E3F]">Tax & Accounts</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
            Have a tax question, need help with corporate accounts, or looking for reliable bookkeeping in Nelson? Speak directly with <strong>Kashif Insari (MAAT)</strong> for expert financial guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="tel:01282611503"
              className="relative group inline-flex items-center justify-center px-8 py-4 bg-[#DC2E3F] text-white font-bold rounded-full shadow-lg shadow-[#DC2E3F]/30 hover:bg-[#b92534] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="absolute -inset-1 rounded-full border-2 border-[#DC2E3F] opacity-40 group-hover:scale-105 transition duration-300 animate-ping" />
              <Phone className="w-5 h-5 mr-2" />
              Tel: 01282 611503
            </a>

            <a
              href="tel:07757510944"
              className="inline-flex items-center justify-center px-6 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 shadow-xs hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              <Smartphone className="w-5 h-5 mr-2 text-gray-300" />
              Mob: 07757 510944
            </a>
          </div>

          {/* Micro Footer Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-gray-400">
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-2 text-[#DC2E3F] shrink-0 mt-0.5" />
              <span>Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5 text-gray-400 shrink-0" />
                <span>Fast 24hr Response</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-[#DC2E3F] shrink-0" />
                <span>100% Confidential</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* RIGHT COLUMN - 3D SCENE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center h-[380px] sm:h-[450px]"
        >
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Ambient Background Glows behind the 3D element */}
            <div className="absolute w-72 h-72 bg-[#DC2E3F]/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute w-60 h-60 bg-[#6B7C96]/20 rounded-full blur-[80px] -z-10 translate-x-10 -translate-y-10" />
            
            <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}