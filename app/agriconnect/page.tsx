"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  ShoppingCart,
  ArrowLeft,
  Search,
  Bell,
  Settings,
  Package,
  BarChart3,
  DollarSign,
  Users,
  MessageSquare,
  Plus,
  Filter,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Home,
  User,
  Menu,
} from "lucide-react"
import Link from "next/link"

export default function AgriConnectApp() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ArrowLeft className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-600">Retour</span>
            </Link>
            <div className="flex items-center space-x-3">
            <div className=" w-12 h-12 sm:h-8 sm:w-8 rounded-lg flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="AgriMind logo" 
              className="w-12 h-12 sm:h-8 sm:w-8 object-contain" 
            />
            </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">AgriConnect</h1>
                <p className="text-sm text-slate-600">Marketplace BtoB</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-3">
                <Home className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">Tableau de bord</span>
              </div>
              <div className="p-3 flex items-center space-x-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
                <Package className="h-5 w-5" />
                <span>Mes produits</span>
              </div>
              <div className="p-3 flex items-center space-x-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
                <ShoppingCart className="h-5 w-5" />
                <span>Commandes</span>
                <Badge className="bg-blue-100 text-blue-700 text-xs ml-auto">5</Badge>
              </div>
              <div className="p-3 flex items-center space-x-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
                <Badge className="bg-red-100 text-red-700 text-xs ml-auto">3</Badge>
              </div>
              <div className="p-3 flex items-center space-x-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
                <BarChart3 className="h-5 w-5" />
                <span>Statistiques</span>
              </div>
              <div className="p-3 flex items-center space-x-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer">
                <Users className="h-5 w-5" />
                <span>Clients</span>
              </div>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">Coopérative Antsirabe</p>
                <p className="text-sm text-slate-600">Vendeur certifié</p>
              </div>
              <Settings className="h-4 w-4 text-slate-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white border-b border-slate-200 p-4">
            <div className="flex items-center justify-between">
              {/* Mobile header */}
              <div className="lg:hidden flex items-center space-x-3">
                <Menu className="h-6 w-6 text-slate-600" />
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4 text-slate-600" />
                </Link>
                <div className="flex items-center space-x-2">
                <div className=" h-8 w-8 rounded-lg flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt="AgriMind logo" 
                      className="h-8 w-8 object-contain" 
                    />
                    </div>
                  <h1 className="text-lg font-bold text-slate-900">AgriConnect</h1>
                </div>
              </div>

              {/* Desktop header */}
              <div className="hidden lg:block">
                <h2 className="text-2xl font-bold text-slate-900">Tableau de bord</h2>
                <p className="text-slate-600">Gérez votre activité de vente</p>
              </div>

              {/* Header actions */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                <div className="relative hidden md:block">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-48 lg:w-64"
                  />
                </div>
                <Button variant="outline" size="sm" className="border-slate-300 bg-transparent p-2 lg:px-3">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button className="bg-green-700 hover:bg-green-800 text-white p-2 lg:px-4">
                  <Plus className="h-4 w-4 lg:mr-2" />
                  <span className="hidden lg:inline">Nouveau produit</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-3 lg:p-6 overflow-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8">
              <Card className="border-slate-200 bg-white">
                <CardContent className="p-3 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-2 lg:mb-0">
                      <p className="text-slate-600 text-xs lg:text-sm">Revenus</p>
                      <p className="text-lg lg:text-3xl font-bold text-slate-900">2.4M Ar</p>
                      <p className="text-green-600 text-xs lg:text-sm mt-1">+15%</p>
                    </div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center self-end lg:self-auto">
                      <DollarSign className="h-4 w-4 lg:h-6 lg:w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardContent className="p-3 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-2 lg:mb-0">
                      <p className="text-slate-600 text-xs lg:text-sm">Commandes</p>
                      <p className="text-lg lg:text-3xl font-bold text-slate-900">18</p>
                      <p className="text-blue-600 text-xs lg:text-sm mt-1">5 en attente</p>
                    </div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center self-end lg:self-auto">
                      <ShoppingCart className="h-4 w-4 lg:h-6 lg:w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardContent className="p-3 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-2 lg:mb-0">
                      <p className="text-slate-600 text-xs lg:text-sm">Produits</p>
                      <p className="text-lg lg:text-3xl font-bold text-slate-900">24</p>
                      <p className="text-orange-600 text-xs lg:text-sm mt-1">3 stock faible</p>
                    </div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center self-end lg:self-auto">
                      <Package className="h-4 w-4 lg:h-6 lg:w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardContent className="p-3 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-2 lg:mb-0">
                      <p className="text-slate-600 text-xs lg:text-sm">Note</p>
                      <p className="text-lg lg:text-3xl font-bold text-slate-900">4.8</p>
                      <p className="text-yellow-600 text-xs lg:text-sm mt-1">156 avis</p>
                    </div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-yellow-100 rounded-lg flex items-center justify-center self-end lg:self-auto">
                      <Star className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
              {/* Recent Orders */}
              <div className="lg:col-span-2">
                <Card className="border-slate-200 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg lg:text-xl text-slate-900">Commandes récentes</CardTitle>
                      <Button variant="outline" size="sm" className="border-slate-300 bg-transparent">
                        <Filter className="h-4 w-4 lg:mr-2" />
                        <span className="hidden lg:inline">Filtrer</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-between p-3 lg:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm lg:text-base">Hôtel Colbert</h4>
                          <p className="text-xs lg:text-sm text-slate-600">Riz rouge bio - 5 sacs</p>
                          <p className="text-xs text-slate-500">Il y a 2h</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 text-sm lg:text-base">225k Ar</p>
                        <Badge className="bg-green-100 text-green-700 text-xs">Confirmée</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 lg:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 lg:h-6 lg:w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm lg:text-base">Restaurant Sakamanga</h4>
                          <p className="text-xs lg:text-sm text-slate-600">Haricots verts - 3 caisses</p>
                          <p className="text-xs text-slate-500">Il y a 5h</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 text-sm lg:text-base">96k Ar</p>
                        <Badge className="bg-yellow-100 text-yellow-700 text-xs">En préparation</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 lg:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm lg:text-base">Cantine Université</h4>
                          <p className="text-xs lg:text-sm text-slate-600">Maïs jaune - 10 sacs</p>
                          <p className="text-xs text-slate-500">Livrée hier</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 text-sm lg:text-base">285k Ar</p>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">Livrée</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Widgets */}
              <div className="space-y-4 lg:space-y-6">
                {/* Quick Actions */}
                <Card className="border-slate-200 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base lg:text-lg text-slate-900">Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 lg:space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-300 bg-transparent text-sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un produit
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300 bg-transparent text-sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages (3)
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300 bg-transparent text-sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Voir les stats
                    </Button>
                  </CardContent>
                </Card>

                {/* Performance */}
                <Card className="border-slate-200 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base lg:text-lg text-slate-900">Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 lg:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 text-sm">Taux de conversion</span>
                      <span className="font-semibold text-green-600 text-sm">12.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 text-sm">Temps de réponse</span>
                      <span className="font-semibold text-blue-600 text-sm">2.3h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 text-sm">Satisfaction client</span>
                      <span className="font-semibold text-yellow-600 text-sm">4.8/5</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card className="border-slate-200 bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base lg:text-lg text-slate-900">Alertes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 lg:space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-orange-800">Stock faible</p>
                        <p className="text-xs text-orange-700">Maïs jaune: 5 sacs restants</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Commande en attente</p>
                        <p className="text-xs text-blue-700">Restaurant Sakamanga</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center space-y-1 p-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Home className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-xs text-green-600 font-medium">Accueil</span>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2">
            <Package className="h-5 w-5 text-slate-400" />
            <span className="text-xs text-slate-400">Produits</span>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2 relative">
            <ShoppingCart className="h-5 w-5 text-slate-400" />
            <span className="text-xs text-slate-400">Commandes</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">5</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2 relative">
            <MessageSquare className="h-5 w-5 text-slate-400" />
            <span className="text-xs text-slate-400">Messages</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2">
            <User className="h-5 w-5 text-slate-400" />
            <span className="text-xs text-slate-400">Profil</span>
          </div>
        </div>
      </div>
    </div>
  )
}
