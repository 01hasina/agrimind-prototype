"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Camera,
  ArrowLeft,
  Home,
  Search,
  History,
  User,
  Brain,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
  Info,
  Upload,
  Award,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AgriDiagApp() {
  const [diagnosisStep, setDiagnosisStep] = useState<"upload" | "analyzing" | "results">("upload")

  const startDiagnosis = () => {
    setDiagnosisStep("analyzing")
    setTimeout(() => setDiagnosisStep("results"), 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 max-w-md mx-auto relative">
      {/* Mobile Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-slate-600" />
            <span className="text-slate-600">Retour</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className=" w-12 h-12 rounded-lg flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="AgriMind logo" 
              className="w-12 h-12  object-contain" 
            />
            </div>
            <span className="text-lg font-bold text-slate-900">AgriDiag</span>
          </div>
          <Badge className="bg-green-100 text-green-700 text-xs">IA</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 px-4 py-6">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Camera className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Diagnostic IA</h1>
          <p className="text-slate-600 text-sm">
            Analysez vos plantes instantanément avec notre IA spécialisée Madagascar
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="border-slate-200 bg-white text-center">
            <CardContent className="p-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Brain className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">94%</p>
              <p className="text-xs text-slate-600">Précision</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white text-center">
            <CardContent className="p-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">30s</p>
              <p className="text-xs text-slate-600">Analyse</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white text-center">
            <CardContent className="p-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Award className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">50+</p>
              <p className="text-xs text-slate-600">Maladies</p>
            </CardContent>
          </Card>
        </div>

        {/* Diagnostic Interface */}
        <Card className="border-slate-200 bg-white mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-slate-900 flex items-center">
              <Camera className="h-5 w-5 mr-2 text-green-600" />
              Nouveau diagnostic
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {diagnosisStep === "upload" && (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center bg-slate-50">
                  <Camera className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-3 text-sm">Prenez une photo de votre plante</p>
                  <Button onClick={startDiagnosis} className="bg-green-700 hover:bg-green-800 text-white w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Prendre une photo
                  </Button>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>• Photo claire de la partie affectée</p>
                  <p>• Bon éclairage naturel recommandé</p>
                  <p>• Formats: JPG, PNG (max 10MB)</p>
                </div>
              </div>
            )}

            {diagnosisStep === "analyzing" && (
              <div className="space-y-4 text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Analyse en cours...</h3>
                  <p className="text-slate-600 text-sm">IA spécialisée Madagascar en action</p>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
                </div>
              </div>
            )}

            {diagnosisStep === "results" && (
              <div className="space-y-4">
                <div className="bg-slate-100 rounded-lg p-3 text-center">
                  <Camera className="h-6 w-6 text-slate-400 mx-auto mb-1" />
                  <p className="text-xs text-slate-600">Feuille de riz analysée</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-800 text-sm">Maladie détectée</span>
                  </div>
                  <h4 className="font-bold text-red-800">Pyriculariose du riz</h4>
                  <p className="text-red-700 text-xs">Confiance: 94%</p>
                </div>

                <Button
                  onClick={() => setDiagnosisStep("upload")}
                  variant="outline"
                  className="w-full border-slate-300"
                >
                  Nouvelle analyse
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Treatment Recommendations - Only show when results */}
        {diagnosisStep === "results" && (
          <>
            <Card className="border-slate-200 bg-white mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-900 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-green-600" />
                  Solutions recommandées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h5 className="font-semibold text-green-800 mb-2 text-sm">Traitement immédiat:</h5>
                  <ul className="text-green-700 space-y-1 text-xs">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 mt-0.5 text-green-600" />
                      <span>Fongicide cuivre (Analakely)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 mt-0.5 text-green-600" />
                      <span>Améliorer ventilation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-3 w-3 mt-0.5 text-green-600" />
                      <span>Réduire arrosage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800 mb-2 text-sm">Prévention:</h5>
                  <ul className="text-blue-700 space-y-1 text-xs">
                    <li className="flex items-start space-x-2">
                      <Info className="h-3 w-3 mt-0.5 text-blue-600" />
                      <span>Variétés résistantes (Makalioka)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Info className="h-3 w-3 mt-0.5 text-blue-600" />
                      <span>Rotation avec légumineuses</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-900">Ressources locales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Fongicide cuivre</p>
                    <p className="text-xs text-slate-600">Magasin Analakely</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 text-xs">Disponible</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Semences résistantes</p>
                    <p className="text-xs text-slate-600">FOFIFA Antsirabe</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 text-xs">Sur commande</Badge>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Recent Diagnostics */}
        <Card className="border-slate-200 bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-slate-900">Diagnostics récents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">Pyriculariose</p>
                  <p className="text-xs text-slate-600">Riz • Il y a 2h</p>
                </div>
              </div>
              <Badge className="bg-red-100 text-red-700 text-xs">Critique</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">Plante saine</p>
                  <p className="text-xs text-slate-600">Haricots • Hier</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700 text-xs">Saine</Badge>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200">
        <div className="grid grid-cols-4 gap-1">
          <div className="flex flex-col items-center py-3 px-2 bg-green-50 border-t-2 border-green-600">
            <Home className="h-5 w-5 text-green-600 mb-1" />
            <span className="text-xs text-green-600 font-medium">Accueil</span>
          </div>
          <div className="flex flex-col items-center py-3 px-2 text-slate-600">
            <Search className="h-5 w-5 mb-1" />
            <span className="text-xs">Recherche</span>
          </div>
          <div className="flex flex-col items-center py-3 px-2 text-slate-600">
            <History className="h-5 w-5 mb-1" />
            <span className="text-xs">Historique</span>
          </div>
          <div className="flex flex-col items-center py-3 px-2 text-slate-600">
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">Profil</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
