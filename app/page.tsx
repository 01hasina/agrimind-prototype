"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Leaf,
  Smartphone,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sprout,
  BarChart3,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  ShoppingCart,
  Camera,
  Globe,
  MessageSquare,
  Clock,
  Award,
} from "lucide-react"
import { useState } from "react"

export default function AgriMindLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState<"agriconnect" | "agridiag" | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12  rounded-lg flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="AgriMind logo" 
              className="w-12 h-12  object-contain" 
            />
          </div>
          <span className="text-2xl font-bold text-slate-900">AgriMind</span>
        </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Solutions
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              À propos
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contact
            </a>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-white">
              Se connecter
            </Button>
            <Button className="bg-green-800 hover:bg-green-900 text-white shadow-sm border-0">Démo gratuite</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a href="#solutions" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Solutions
              </a>
              <a href="#about" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                À propos
              </a>
              <a href="#contact" className="block text-slate-600 hover:text-slate-900 transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-white">
                  Se connecter
                </Button>
                <Button className="bg-green-800 hover:bg-green-900 text-white shadow-sm border-0">Démo gratuite</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/30"></div>
        <div className="absolute inset-0 bg-[url('/abstract-agricultural-pattern-with-rice-fields-and.jpg')] opacity-5 bg-cover bg-center"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-green-50 text-green-700 border-green-200 text-sm px-4 py-2">
              🌱 Première startup digitale agricole malgache
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 text-balance leading-tight">
              Révolutionnons l'agriculture malgache avec le <span className="text-green-600">numérique</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              AgriMind combine expertise numérique et agronomique pour créer des solutions durables qui modernisent
              l'agriculture à Madagascar et connectent producteurs aux acheteurs institutionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 text-lg shadow-sm border-0"
              >
                Découvrir nos solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg bg-white shadow-sm"
              >
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Les défis de l'agriculture malgache
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              L'agriculture malgache fait face à des défis majeurs qui limitent sa productivité et sa durabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Manque de digitalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Les agriculteurs n'ont pas accès aux outils numériques modernes pour optimiser leurs pratiques et
                  améliorer leur productivité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Manque de formation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Accès limité aux connaissances techniques et aux meilleures pratiques agricoles adaptées au contexte
                  local.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-7 w-7 text-amber-600" />
                </div>
                <CardTitle className="text-slate-900 text-xl">Difficultés de mise en relation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Manque de plateformes pour connecter efficacement producteurs aux acheteurs institutionnels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Nos solutions innovantes
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              AgriMind développe des outils numériques spécialement conçus pour l'agriculture malgache.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* AgriConnect */}
            <Card className="border-slate-200 bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-slate-900 mb-2">AgriConnect</CardTitle>
                    <CardDescription className="text-lg text-green-600">
                      Plateforme e-commerce agricole BtoB
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Une marketplace digitale qui permet aux{" "}
                  <strong className="text-green-600">ONG agricoles, collecteurs et coopératives</strong> de vendre
                  directement leurs produits aux acheteurs institutionnels.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Vente directe BtoB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Interface vendeur intuitive</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Gestion commandes en gros</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Paiements sécurisés</span>
                  </div>
                </div>

                <div className="pt-4">
                  {/* Enhanced contrast for AgriConnect button */}
                  <Link href="/agriconnect">
                    <Button className="w-full bg-green-800 hover:bg-green-900 text-white py-4 text-lg font-semibold shadow-sm border-0">
                      Découvrir AgriConnect
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* AgriDiag */}
            <Card className="border-slate-200 bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-slate-900 mb-2">AgriDiag</CardTitle>
                    <CardDescription className="text-lg text-green-600">
                      Diagnostic intelligent des plantes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Une application mobile utilisant l'IA pour diagnostiquer les maladies des plantes et proposer des
                  solutions adaptées au contexte malgache.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Reconnaissance par photo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Conseils personnalisés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Base de données locale</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium">Solutions Madagascar</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/agridiag">
                    <Button
                      className="w-full bg-green-800 hover:bg-green-900 text-white py-4 text-lg font-semibold shadow-sm border-0"
                      style={{ backgroundColor: "#166534", color: "#ffffff" }}
                    >
                      Essayer AgriDiag
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AgriConnect Preview */}
      {activeService === "agriconnect" && (
        <section className="py-16 lg:py-20 bg-green-50 border-t-4 border-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Aperçu AgriConnect</h2>
                    <p className="text-lg text-green-600">Plateforme e-commerce agricole BtoB</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setActiveService(null)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <X className="h-4 w-4 mr-2" />
                  Fermer
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Interface Vendeur Simplifiée</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Conçue spécialement pour les ONG agricoles, collecteurs et coopératives malgaches. Gérez vos
                      produits, commandes et paiements en toute simplicité.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Catalogue produits en ligne</h4>
                          <p className="text-slate-600">
                            Présentez vos produits agricoles avec photos et descriptions détaillées
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MessageSquare className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Communication directe</h4>
                          <p className="text-slate-600">Échangez directement avec les acheteurs institutionnels</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Suivi des commandes</h4>
                          <p className="text-slate-600">Gérez vos commandes de la réception au paiement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <h4 className="text-xl font-bold text-slate-900">Tableau de bord vendeur</h4>
                      <Badge className="bg-green-100 text-green-700">En ligne</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">24</div>
                        <div className="text-sm text-slate-600">Produits actifs</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-slate-600">Commandes en cours</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Leaf className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">Riz rouge bio - 50kg</div>
                            <div className="text-sm text-slate-600">Coopérative Antsirabe</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-semibold">45 000 Ar</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Sprout className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">Haricots verts - 25kg</div>
                            <div className="text-sm text-slate-600">ONG Fianarantsoa</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-semibold">32 000 Ar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AgriDiag Preview */}
      {activeService === "agridiag" && (
        <section className="py-16 lg:py-20 bg-green-50 border-t-4 border-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Aperçu AgriDiag</h2>
                    <p className="text-lg text-green-600">Diagnostic intelligent des plantes</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setActiveService(null)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <X className="h-4 w-4 mr-2" />
                  Fermer
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">IA Spécialisée Madagascar</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Notre intelligence artificielle est entraînée spécifiquement sur les cultures et maladies
                      présentes à Madagascar pour des diagnostics précis et des solutions adaptées.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Camera className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Diagnostic par photo</h4>
                          <p className="text-slate-600">
                            Prenez une photo de votre plante malade et obtenez un diagnostic instantané
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Solutions locales</h4>
                          <p className="text-slate-600">
                            Recommandations basées sur les ressources disponibles à Madagascar
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <BarChart3 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-900">Suivi des traitements</h4>
                          <p className="text-slate-600">
                            Historique des diagnostics et efficacité des traitements appliqués
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <h4 className="text-xl font-bold text-slate-900">Diagnostic en cours</h4>
                      <Badge className="bg-green-100 text-green-700">IA Active</Badge>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-4 text-center">
                      <Camera className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-slate-600 text-sm">Photo analysée : Feuille de riz</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="font-semibold text-red-800">Maladie détectée</span>
                        </div>
                        <p className="text-red-700 font-medium">Pyriculariose du riz</p>
                        <p className="text-red-600 text-sm">Confiance : 94%</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Solutions recommandées :</h5>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Traitement fongicide à base de cuivre</li>
                          <li>• Améliorer la ventilation des plants</li>
                          <li>• Réduire l'humidité excessive</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-800 mb-2">Prévention :</h5>
                        <p className="text-blue-700 text-sm">
                          Rotation des cultures et utilisation de variétés résistantes disponibles à Madagascar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Pourquoi choisir AgriMind ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise locale</h3>
              <p className="text-slate-600 leading-relaxed">
                Solutions développées spécifiquement pour le contexte agricole malgache avec une connaissance
                approfondie du terrain.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Innovation technologique</h3>
              <p className="text-slate-600 leading-relaxed">
                Technologies de pointe (IA, machine learning) adaptées aux besoins spécifiques de l'agriculture
                tropicale.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Impact durable</h3>
              <p className="text-slate-600 leading-relaxed">
                Engagement pour une agriculture durable qui respecte l'environnement et améliore les conditions de vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Sprout className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
                Notre vision pour Madagascar
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md">
                Nous croyons en une agriculture malgache moderne, durable et productive. Notre mission est de
                démocratiser l'accès aux technologies agricoles pour transformer le secteur et améliorer les conditions
                de vie des agriculteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Rejoignez la révolution agricole
            </h2>
            <p className="text-lg md:text-xl mb-8 text-green-100 leading-relaxed max-w-2xl mx-auto">
              Découvrez comment AgriMind peut transformer votre activité agricole avec nos solutions numériques
              innovantes adaptées à Madagascar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-sm border-0"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Planifier une démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AgriMind</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                La première startup digitale dédiée à l'agriculture malgache, combinant expertise numérique et
                agronomique pour un impact durable.
              </p>
              <div className="text-sm text-slate-400">
                <p>© 2024 AgriMind. Tous droits réservés.</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Solutions</h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    AgriConnect
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    AgriDiag
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Support technique
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a href="mailto:contact@agrimind.mg" className="hover:text-green-400 transition-colors">
                    contact@agrimind.mg
                  </a>
                </li>
                <li>+261 XX XX XX XXX</li>
                <li>Antananarivo, Madagascar</li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Nous rejoindre
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
