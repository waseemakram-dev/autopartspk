'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts, Product, carBrands, partCategories, shopInfo } from '@/data/partsData';
import { Search, Filter, ShieldCheck, Star, MessageSquare, Tag, Grid, List, ChevronRight, RefreshCw, X, ChevronLeft, Eye, Heart, SlidersHorizontal } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

export const ProductsCatalogClient: React.FC = () => {
    // State management
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [priceRange, setPriceRange] = useState<number>(60000);
    const [minRating, setMinRating] = useState<number>(0);
    const [sortBy, setSortBy] = useState<string>('popular');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

    // Compute Category Counts dynamically
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: allProducts.length };
        allProducts.forEach((prod) => {
            counts[prod.category] = (counts[prod.category] || 0) + 1;
        });
        return counts;
    }, []);

    // Filter Logic
    const filteredProducts = useMemo(() => {
        let list = allProducts.filter((product: Product) => {
            // Category filter
            if (selectedCategory !== 'all' && product.category !== selectedCategory) {
                return false;
            }

            // Brand filter
            if (selectedBrand !== 'all' && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
                return false;
            }

            // Price filter
            if (product.pricePKR > priceRange) {
                return false;
            }

            // Rating filter
            if (minRating > 0 && product.rating < minRating) {
                return false;
            }

            // Search query filter
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();
                const matchesName = product.name.toLowerCase().includes(query);
                const matchesPartNum = product.partNumber.toLowerCase().includes(query);
                const matchesBrand = product.brand.toLowerCase().includes(query);
                const matchesModels = product.compatibleModels.some(model => model.toLowerCase().includes(query));
                const matchesDesc = product.description.toLowerCase().includes(query);

                return matchesName || matchesPartNum || matchesBrand || matchesModels || matchesDesc;
            }

            return true;
        });

        // Sorting
        if (sortBy === 'price-low') {
            list = list.sort((a, b) => a.pricePKR - b.pricePKR);
        } else if (sortBy === 'price-high') {
            list = list.sort((a, b) => b.pricePKR - a.pricePKR);
        } else if (sortBy === 'rating') {
            list = list.sort((a, b) => b.rating - a.rating);
        }

        return list;
    }, [searchQuery, selectedBrand, selectedCategory, priceRange, minRating, sortBy]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Top selling featured mini list for sidebar
    const recentProducts = allProducts.slice(0, 4);

    // WhatsApp Order Handler
    const handlePartWhatsAppOrder = (part: Product) => {
        const text = `Assalam o Alaikum! Mujhe ${part.name} (Part #${part.partNumber}) ki price aur counter stock check karni hai.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Empty State WhatsApp Handler
    const handleEmptyStateWhatsApp = () => {
        const queryText = searchQuery ? `"${searchQuery}"` : selectedCategory !== 'all' ? selectedCategory : 'spare parts';
        const text = `Assalam o Alaikum! Mujhe Auto Parts PK Bahawalpur se ${queryText} ki price aur availability check karni hai.`;
        window.open(`https://wa.me/${shopInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Reset All Filters
    const resetFilters = () => {
        setSearchQuery('');
        setSelectedBrand('all');
        setSelectedCategory('all');
        setPriceRange(60000);
        setMinRating(0);
        setSortBy('popular');
        setCurrentPage(1);
    };

    const hasActiveFilters = searchQuery !== '' || selectedBrand !== 'all' || selectedCategory !== 'all' || priceRange < 60000 || minRating > 0;

    return (
        <section className="w-full bg-[#f4f7f8] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* ========================================================================= */}
                    {/* LEFT MAIN CONTENT AREA (Products Grid + Header Bar + Pagination) */}
                    {/* ========================================================================= */}
                    <div className="lg:col-span-8 xl:col-span-9 space-y-6">

                        {/* MOBILE ONLY QUICK SEARCH & FILTER STRIP */}
                        <div className="block lg:hidden bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm space-y-3 font-['Space_Grotesk',sans-serif]">
                            {/* Mobile Search Box */}
                            <div className="relative">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    placeholder="🔍 Search part name, part # or model..."
                                    className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-xs pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d31826]"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Brand Pills Touch Scroll */}
                            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px] font-bold">
                                <button
                                    onClick={() => {
                                        setSelectedBrand('all');
                                        setCurrentPage(1);
                                    }}
                                    className={`shrink-0 px-3 py-1.5 rounded-full uppercase transition-colors cursor-pointer ${
                                        selectedBrand === 'all' ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                                    }`}
                                >
                                    All Brands
                                </button>
                                {carBrands.map((brand) => (
                                    <button
                                        key={brand.id}
                                        onClick={() => {
                                            setSelectedBrand(brand.name);
                                            setCurrentPage(1);
                                        }}
                                        className={`shrink-0 px-3 py-1.5 rounded-full uppercase transition-colors cursor-pointer ${
                                            selectedBrand === brand.name ? 'bg-[#d31826] text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                                        }`}
                                    >
                                        {brand.name}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Toggle Drawer Button */}
                            <button
                                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                <SlidersHorizontal className="w-4 h-4 text-[#d31826]" />
                                <span>{isMobileFilterOpen ? 'Close Detailed Filters ▲' : 'Expand Price & Category Filters ▼'}</span>
                            </button>

                            {/* Collapsible Mobile Filter Drawer */}
                            {isMobileFilterOpen && (
                                <div className="pt-3 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                                    {/* Price Slider */}
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                                            <span>Max Price:</span>
                                            <span className="text-[#d31826]">PKR {priceRange.toLocaleString()}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="2000"
                                            max="60000"
                                            step="1000"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(Number(e.target.value))}
                                            className="w-full accent-[#d31826]"
                                        />
                                    </div>

                                    {/* Mobile Category Select */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-700 block">Category:</label>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => {
                                                setSelectedCategory(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            className="w-full bg-slate-50 text-slate-800 text-xs p-2.5 rounded-xl border border-slate-200 font-bold"
                                        >
                                            <option value="all">All Spare Categories</option>
                                            {partCategories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Top Header Controls Bar (Matching Reference Design) */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-['Space_Grotesk',sans-serif]">
                            
                            {/* Showing count indicator */}
                            <div className="text-xs text-slate-600 font-bold">
                                Showing {filteredProducts.length > 0 ? `${startIndex + 1}-${Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)}` : 0} of {filteredProducts.length} results
                            </div>

                            {/* Controls: Sort Dropdown + View Mode Buttons */}
                            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                                
                                {/* Sort Dropdown */}
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-slate-500 hidden sm:inline">Sort by:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-[#d31826] cursor-pointer font-medium"
                                    >
                                        <option value="popular">Sort by popular</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Highest Rated</option>
                                    </select>
                                </div>

                                {/* View Switcher Buttons */}
                                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                            viewMode === 'grid' ? 'bg-[#d31826] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                        title="Grid View"
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                            viewMode === 'list' ? 'bg-[#d31826] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                        title="List View"
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Active Filter Chips Bar (if any filter active) */}
                        {hasActiveFilters && (
                            <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-['Space_Grotesk',sans-serif]">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-slate-500 font-bold">Active Filters:</span>
                                    {selectedBrand !== 'all' && (
                                        <span className="bg-[#d31826]/10 text-[#d31826] border border-[#d31826]/20 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                                            Brand: {selectedBrand}
                                            <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedBrand('all')} />
                                        </span>
                                    )}
                                    {selectedCategory !== 'all' && (
                                        <span className="bg-[#d31826]/10 text-[#d31826] border border-[#d31826]/20 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                                            Category: {selectedCategory}
                                            <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                                        </span>
                                    )}
                                    {searchQuery && (
                                        <span className="bg-[#d31826]/10 text-[#d31826] border border-[#d31826]/20 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                                            Search: "{searchQuery}"
                                            <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
                                        </span>
                                    )}
                                    {priceRange < 60000 && (
                                        <span className="bg-[#d31826]/10 text-[#d31826] border border-[#d31826]/20 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                                            Max Price: PKR {priceRange.toLocaleString()}
                                            <X className="w-3 h-3 cursor-pointer" onClick={() => setPriceRange(60000)} />
                                        </span>
                                    )}
                                </div>

                                <button
                                    onClick={resetFilters}
                                    className="text-red-600 hover:underline font-bold text-[11px] flex items-center gap-1"
                                >
                                    <RefreshCw className="w-3 h-3" /> Reset All
                                </button>
                            </div>
                        )}

                        {/* Products Display (Grid View or List View) */}
                        {paginatedProducts.length > 0 ? (
                            viewMode === 'grid' ? (
                                /* GRID VIEW (3 Columns) */
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {paginatedProducts.map((part: Product) => (
                                        <motion.div
                                            key={part.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.25 }}
                                            className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#d31826]/40 shadow-sm hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                                        >
                                            <div>
                                                {/* Image Container with Servixa Dual-Image Lens Blur Motion Animation */}
                                                <div className="relative h-52 bg-slate-900 overflow-hidden">
                                                    {/* Image 1: Bottom Image (Starts blurred +50% right, enters into sharp focus on Hover) */}
                                                    <img
                                                        src={part.image}
                                                        alt={part.name}
                                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-10 translate-x-1/2 scale-x-[2] opacity-0 blur-md group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
                                                    />

                                                    {/* Image 2: Top Image (Starts sharp center, exits blurred -50% left on Hover) */}
                                                    <img
                                                        src={part.image}
                                                        alt={part.name}
                                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out z-20 translate-x-0 scale-x-100 opacity-100 blur-none group-hover:-translate-x-1/2 group-hover:scale-x-[2] group-hover:opacity-0 group-hover:blur-md"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500 pointer-events-none z-30" />

                                                    {/* Top Tag Badge */}
                                                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#d31826] text-white px-2.5 py-1 rounded-md text-[10px] font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider shadow-md z-10">
                                                        <span>{part.condition}</span>
                                                    </div>


                                                </div>

                                                {/* Product Meta */}
                                                <div className="p-5">
                                                    <div className="flex items-center justify-between text-xs font-['Space_Grotesk',sans-serif] text-slate-500 mb-1">
                                                        <span className="font-bold text-[#d31826] uppercase">{part.brand} OEM</span>
                                                        <span className="text-[10px]">Part #{part.partNumber}</span>
                                                    </div>

                                                    <h3 className="font-['Rajdhani',sans-serif] text-lg font-bold uppercase tracking-tight text-[#0f1115] leading-tight mb-2 group-hover:text-[#d31826] transition-colors line-clamp-2">
                                                        {part.name}
                                                    </h3>

                                                    <p className="text-xs font-['Space_Grotesk',sans-serif] text-slate-600 leading-relaxed mb-3 line-clamp-2">
                                                        {part.description}
                                                    </p>

                                                    {/* Compatible Models Tags */}
                                                    <div className="flex flex-wrap gap-1 mb-2">
                                                        {part.compatibleModels.slice(0, 2).map((model: string, idx: number) => (
                                                            <span
                                                                key={idx}
                                                                className="text-[9px] font-['Space_Grotesk',sans-serif] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 font-medium"
                                                            >
                                                                {model}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Price and CTA Button */}
                                            <div className="p-5 pt-0">
                                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[9px] font-['Space_Grotesk',sans-serif] uppercase text-slate-400 block">
                                                            Rate
                                                        </span>
                                                        <span className="font-['Rajdhani',sans-serif] text-xl text-[#0f1115] font-bold">
                                                            PKR {part.pricePKR.toLocaleString()}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onClick={() => handlePartWhatsAppOrder(part)}
                                                        className="px-3.5 py-2 rounded-xl bg-[#d31826] hover:bg-[#b81320] text-white text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-500/20 active:scale-95 cursor-pointer"
                                                    >
                                                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                                        <span>Inquire</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                /* LIST VIEW (Full Width Cards) */
                                <div className="space-y-4">
                                    {paginatedProducts.map((part: Product) => (
                                        <div
                                            key={part.id}
                                            className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 p-4 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center gap-5"
                                        >
                                            <img
                                                src={part.image}
                                                alt={part.name}
                                                className="w-full sm:w-40 h-36 object-cover rounded-xl bg-slate-900 shrink-0"
                                            />

                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center justify-between text-xs font-['Space_Grotesk',sans-serif]">
                                                    <span className="font-bold text-[#d31826] uppercase">{part.brand} OEM</span>
                                                    <span className="text-slate-400">Part #{part.partNumber}</span>
                                                </div>

                                                <h3 className="font-['Rajdhani',sans-serif] text-xl font-bold uppercase tracking-tight text-[#0f1115]">
                                                    {part.name}
                                                </h3>

                                                <p className="text-xs font-['Space_Grotesk',sans-serif] text-slate-600 leading-relaxed line-clamp-2">
                                                    {part.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1">
                                                    {part.compatibleModels.map((m, idx) => (
                                                        <span key={idx} className="text-[10px] font-['Space_Grotesk',sans-serif] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                                                            {m}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="sm:text-right shrink-0 space-y-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between">
                                                <div>
                                                    <span className="text-[10px] text-slate-400 block">Wholesale Rate</span>
                                                    <span className="font-['Rajdhani',sans-serif] text-2xl font-bold text-[#0f1115]">
                                                        PKR {part.pricePKR.toLocaleString()}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={() => handlePartWhatsAppOrder(part)}
                                                    className="px-4 py-2.5 rounded-xl bg-[#d31826] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
                                                >
                                                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                                    <span>Inquire</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            /* EMPTY STATE */
                            <div className="bg-white rounded-3xl border border-slate-200 p-10 sm:p-14 text-center my-6 shadow-sm space-y-4 font-['Space_Grotesk',sans-serif]">
                                <div className="w-14 h-14 rounded-full bg-red-100 text-[#d31826] flex items-center justify-center mx-auto mb-2">
                                    <Tag className="w-7 h-7" />
                                </div>

                                <h3 className="font-['Rajdhani',sans-serif] text-2xl font-bold text-[#0f1115] uppercase">
                                    Koi part is category mein nahi mila abhi
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                                    {searchQuery ? `"${searchQuery}"` : 'Selected filter'} ka required spare part counter stock mein available ho sakta hai. WhatsApp par photo bhej kar instant rate lein.
                                </p>

                                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                                    <button
                                        onClick={handleEmptyStateWhatsApp}
                                        className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 active:scale-95 cursor-pointer"
                                    >
                                        <MessageSquare className="w-4 h-4 fill-current" />
                                        <span>WhatsApp Par Poochein →</span>
                                    </button>

                                    <button
                                        onClick={resetFilters}
                                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider cursor-pointer"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Pagination Numbers (Matching Reference Design: < 1 2 3 >) */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 pt-6 pb-2 font-['Space_Grotesk',sans-serif]">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#d31826] hover:text-white hover:border-[#d31826] transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-9 h-9 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                                            currentPage === pageNum
                                                ? 'bg-[#d31826] text-white shadow-md shadow-red-500/30'
                                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                ))}

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#d31826] hover:text-white hover:border-[#d31826] transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 cursor-pointer"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                    </div>

                    {/* ========================================================================= */}
                    {/* RIGHT SIDEBAR FILTER PANEL (Matching Reference Design Widgets Exactly) */}
                    {/* ========================================================================= */}
                    <div className="lg:col-span-4 xl:col-span-3 space-y-6">

                        {/* WIDGET 1: Search Box Widget */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3 font-['Space_Grotesk',sans-serif]">
                            <h4 className="font-['Rajdhani',sans-serif] text-base font-bold text-[#0f1115] uppercase tracking-tight border-b border-slate-100 pb-2">
                                Search Catalog
                            </h4>
                            <div className="flex items-center gap-1.5">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    placeholder="Search..."
                                    className="w-full bg-slate-50 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#d31826]"
                                />
                                <button className="p-2.5 rounded-xl bg-[#d31826] text-white hover:bg-[#b81320] transition-colors cursor-pointer shrink-0">
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* WIDGET 2: Price Range Filter */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4 font-['Space_Grotesk',sans-serif]">
                            <div className="flex items-center gap-1.5 text-[#d31826] font-bold text-sm">
                                <span>►</span>
                                <h4 className="font-['Rajdhani',sans-serif] text-base font-bold text-[#0f1115] uppercase tracking-tight">
                                    Price Range
                                </h4>
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="range"
                                    min="2000"
                                    max="60000"
                                    step="1000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full accent-[#d31826] cursor-pointer"
                                />
                                <div className="flex items-center justify-between text-xs text-slate-600 font-bold">
                                    <span>PKR 0</span>
                                    <span>Max: PKR {priceRange.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setCurrentPage(1)}
                                className="w-full py-2 rounded-xl bg-[#0f1115] hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                            >
                                Filter
                            </button>
                        </div>

                        {/* WIDGET 3: Categories Widget (with Red Arrow Buttons) */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3 font-['Space_Grotesk',sans-serif]">
                            <div className="flex items-center gap-1.5 text-[#d31826] font-bold text-sm">
                                <span>►</span>
                                <h4 className="font-['Rajdhani',sans-serif] text-base font-bold text-[#0f1115] uppercase tracking-tight">
                                    Categories
                                </h4>
                            </div>

                            <div className="space-y-1.5">
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setCurrentPage(1);
                                    }}
                                    className={`w-full p-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                                        selectedCategory === 'all'
                                            ? 'bg-[#d31826] text-white'
                                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>All Spare Categories</span>
                                    <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px]">
                                        →
                                    </span>
                                </button>

                                {partCategories.map((cat) => {
                                    const isActive = selectedCategory === cat.id;
                                    const count = categoryCounts[cat.id] || 0;

                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setSelectedCategory(cat.id);
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full p-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                                                isActive
                                                    ? 'bg-[#d31826] text-white shadow-sm'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                            }`}
                                        >
                                            <span>{cat.name} ({count})</span>
                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                                                isActive ? 'bg-white text-[#d31826]' : 'bg-[#d31826] text-white'
                                            }`}>
                                                →
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* WIDGET 4: Recent / Top Selling Products Widget */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4 font-['Space_Grotesk',sans-serif]">
                            <div className="flex items-center gap-1.5 text-[#d31826] font-bold text-sm">
                                <span>►</span>
                                <h4 className="font-['Rajdhani',sans-serif] text-base font-bold text-[#0f1115] uppercase tracking-tight">
                                    Recent Stock Products
                                </h4>
                            </div>

                            <div className="space-y-3">
                                {recentProducts.map((prod) => (
                                    <div
                                        key={prod.id}
                                        onClick={() => handlePartWhatsAppOrder(prod)}
                                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-slate-100"
                                    >
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="w-14 h-14 object-cover rounded-lg bg-slate-900 shrink-0 group-hover:scale-105 transition-transform"
                                        />
                                        <div className="space-y-0.5 overflow-hidden">
                                            <h5 className="text-xs font-bold text-slate-900 truncate group-hover:text-[#d31826] transition-colors font-['Rajdhani',sans-serif] uppercase">
                                                {prod.name}
                                            </h5>
                                            <span className="text-xs font-bold text-[#d31826] block">
                                                PKR {prod.pricePKR.toLocaleString()}
                                            </span>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WIDGET 5: Brand Tags Cloud Widget */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3 font-['Space_Grotesk',sans-serif]">
                            <div className="flex items-center gap-1.5 text-[#d31826] font-bold text-sm">
                                <span>►</span>
                                <h4 className="font-['Rajdhani',sans-serif] text-base font-bold text-[#0f1115] uppercase tracking-tight">
                                    Car Brand Tags
                                </h4>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                <button
                                    onClick={() => {
                                        setSelectedBrand('all');
                                        setCurrentPage(1);
                                    }}
                                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                                        selectedBrand === 'all'
                                            ? 'bg-[#d31826] text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    ALL BRANDS
                                </button>

                                {carBrands.map((brand) => (
                                    <button
                                        key={brand.id}
                                        onClick={() => {
                                            setSelectedBrand(brand.name);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                                            selectedBrand === brand.name
                                                ? 'bg-[#d31826] text-white'
                                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                    >
                                        {brand.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductsCatalogClient;
