#!/usr/bin/env node

/**
 * Environment Variables Validation Script
 * Validates that all required environment variables are present
 */

const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
]

const optionalEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
  'NODE_ENV'
]

function validateEnvironment() {
  console.log('🔍 Validating environment variables...\n')
  
  let hasErrors = false
  
  // Check required variables
  console.log('Required variables:')
  requiredEnvVars.forEach(varName => {
    const value = process.env[varName]
    if (!value) {
      console.log(`❌ ${varName}: Missing`)
      hasErrors = true
    } else {
      console.log(`✅ ${varName}: Present`)
    }
  })
  
  console.log('\nOptional variables:')
  optionalEnvVars.forEach(varName => {
    const value = process.env[varName]
    if (!value) {
      console.log(`⚠️  ${varName}: Not set (optional)`)
    } else {
      console.log(`✅ ${varName}: Present`)
    }
  })
  
  // Validate Supabase URL format
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (supabaseUrl && !supabaseUrl.includes('supabase.co')) {
    console.log('\n❌ NEXT_PUBLIC_SUPABASE_URL does not appear to be a valid Supabase URL')
    hasErrors = true
  }
  
  // Validate Supabase key format
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (supabaseKey && !supabaseKey.startsWith('eyJ')) {
    console.log('\n❌ NEXT_PUBLIC_SUPABASE_ANON_KEY does not appear to be a valid JWT token')
    hasErrors = true
  }
  
  console.log('\n' + '='.repeat(50))
  
  if (hasErrors) {
    console.log('❌ Environment validation failed!')
    console.log('Please check your environment variables and try again.')
    process.exit(1)
  } else {
    console.log('✅ Environment validation passed!')
    console.log('Your application is ready for deployment.')
  }
}

// Run validation
validateEnvironment()
